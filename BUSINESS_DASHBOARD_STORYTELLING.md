# รายงานการออกแบบ Dashboard เชิงเล่าเรื่อง (Storytelling Business Dashboard)
## รายวิชา Business Idea Creation & Data Warehouse / Business Intelligence
### โปรเจกต์: Demandly — AI Demand Forecasting & Inventory Risk Intelligence Platform

---

## 1. ข้อมูลบริษัทและบริบทธุรกิจ (Business Context & Startup Idea)

### 1.1 ข้อมูลบริษัทในรายวิชา Business Idea Creation
- **ชื่อบริษัท / สตาร์ทอัพ:** **Demandly Logistics & Healthcare Solutions Co., Ltd.**
- **โมเดลธุรกิจ (Business Model):** B2B SaaS Platform ให้บริการพยากรณ์อุปสงค์ (Demand Forecasting) และบริหารจัดการความเสี่ยงสินค้าคงคลังเวชภัณฑ์ (Medical Supplies & Healthcare Logistics) ด้วยปัญญาประดิษฐ์ (AI & Machine Learning)
- **กลุ่มลูกค้าเป้าหมาย (Customer Segments):**
  1. เครือโรงพยาบาลรัฐและเอกชน (Hospital Networks)
  2. ผู้ผลิตและผู้จัดจำหน่ายเวชภัณฑ์ทางการแพทย์ (Medical Device Distributors)
  3. ร้านขายยาเครือข่ายและศูนย์กระจายสินค้าเวชภัณฑ์ (Pharmaceutical Chain & DCs)

### 1.2 ปัญหาทางธุรกิจที่ต้องแก้ไข (Business Problem & The "Why")
เวชภัณฑ์และอุปกรณ์ทางการแพทย์ (เช่น ชุดตรวจคัดกรองโรค Test Kit, ถุงมือผ่าตัด Nitrile Gloves, หน้ากากอนามัย N95/Level 3) มีลักษณะเฉพาะทางธุรกิจที่วิกฤต:
1. **ความผันผวนสูงมากจากปัจจัยภายนอก (High Volatility & Epidemic Spikes):** เมื่อเกิดโรคระบาดตามฤดูกาล หรือมลพิษทางอากาศ อุปสงค์อาจพุ่งขึ้นทันที +30% ถึง +50% ภายใน 1-2 สัปดาห์
2. **Lead Time การผลิตและนำเข้ายาวนาน (14 – 21 วัน):** หากรอให้สินค้าหน้าร้านหมดจึงสั่งซื้อ จะเกิดสภาวะ **Stockout (ของขาดแคลน)** ซึ่งส่งผลกระทบต่อชีวิตผู้ป่วยและสูญเสียรายได้
3. **ต้นทุนการถือครองสินค้าและความเสี่ยงหมดอายุ (Holding & Expiry Cost):** การสำรองสต็อกมากเกินไปทำให้เงินทุนจมและเสี่ยงสินค้าหมดอายุ

> **ตรรกะการออกแบบตามสไลด์ที่ 3 ใน BusinessDashboard.pdf:**
> *"BI ไม่ใช่กราฟสวย แต่คือเครื่องจักรแปลงข้อมูลเป็นการตัดสินใจ แก่นของ BI คือการทำให้คนเห็นสิ่งที่ควรทำต่อ โดยไม่ถามว่า 'มีกราฟอะไรได้บ้าง' แต่ถามว่า **'คนดูต้องเปลี่ยนพฤติกรรมอะไรหลังเห็นจอนี้'***

---

## 2. โจทย์ข้อ 1: ส่ง Data ที่ใช้ (Data Assets & Star Schema Architecture)

### 2.1 แหล่งที่มาของข้อมูล (Data Source & Ingestion)
ข้อมูลที่ใช้จำลองและทดสอบระบบจัดเก็บอยู่ในโฟลเดอร์ `datasets/` รวมทั้งสิ้น **273,000 แถว** ครอบคลุม 5 สถานการณ์ทางธุรกิจ:
1. `01_stable_demand.csv`: รูปแบบยอดขายคงที่สม่ำเสมอ สำหรับสินค้ามาตรฐาน (เช่น ถุงมือยาง, กระบอกฉีดยา)
2. `02_growth_trend.csv`: ยอดขายเติบโตต่อเนื่องตามการขยายสาขาของโรงพยาบาล
3. `03_seasonal_demand.csv`: ยอดขายตามฤดูกาล (เช่น ฤดูฝน/ฤดูหนาว มีผู้ป่วยไข้หวัดเพิ่มขึ้น)
4. `04_demand_spike.csv`: ยอดขายพุ่งกระทันหันจากวิกฤตโรคระบาด (Epidemic Outbreak Surge)
5. `05_large_skewed_sales.csv`: ชุดข้อมูลขนาดใหญ่สำหรับการทดสอบ Query Indexing ใน PostgreSQL

### 2.2 สถาปัตยกรรม Star Schema (ตามสไลด์ที่ 11 ใน BusinessDashboard.pdf)
ข้อมูลถูกออกแบบให้อยู่ในรูปแบบ **Star Schema** เพื่อเพิ่มประสิทธิภาพในการสืบค้นเชิงวิเคราะห์ (Analytical Query Performance) และสร้าง Semantic Layer ที่ทุกคนในองค์กรเข้าใจตรงกัน:

```
                  ┌────────────────────────┐
                  │       dim_date         │
                  │ (PK: date_key)         │
                  └───────────┬────────────┘
                              │
                              ▼
┌──────────────────┐   ┌──────────────────────────────┐   ┌──────────────────┐
│   dim_product    │──►│      fact_demand_sales       │◄──│    dim_region    │
│ (PK: product_key)│   │ (PK: sales_fact_id)          │   │ (PK: region_key) │
└──────────────────┘   │                              │   └──────────────────┘
                       │ [FK] date_key                │
                       │ [FK] product_key             │
                       │ [FK] region_key              │
                       │ [FK] scenario_key            │
                       │                              │
                       │ [Measures]:                  │
                       │  • sales_quantity            │
                       │  • inventory_snapshot        │
                       │  • forecast_demand_qty       │
                       │  • stock_cover_days          │
                       │  • safety_stock_threshold    │
                       │  • reorder_point             │
                       │  • revenue_thb               │
                       └──────────────┬───────────────┘
                                      ▲
                                      │
                  ┌───────────────────┴────┐
                  │      dim_scenario      │
                  │ (PK: scenario_key)     │
                  └────────────────────────┘
```

#### รายละเอียด Grain (ระดับความละเอียดของข้อมูล):
- **Grain:** **Daily Transaction per SKU per Regional Distribution Center (DC)**
- บันทึกยอดขายจริงรายวัน ยอดสต็อกคงคลัง ณ สิ้นวัน และผลการพยากรณ์อุปสงค์ล่วงหน้า 30-90 วัน แยกตามรหัสสินค้าและศูนย์กระจายสินค้า 5 ภูมิภาค (กรุงเทพฯ, กลาง, ตะวันออก, เหนือ, ใต้)

### 2.3 พจนานุกรมข้อมูล (Data Dictionary & Semantic Layer - สไลด์ที่ 5 & 10)

| Field Name | Table | Type | Grain | Business Definition & Formula |
|---|---|---|---|---|
| `sales_quantity` | `fact_demand_sales` | `INT` | รายวัน x SKU x DC | จำนวนหน่วยสินค้าที่ส่งมอบให้ลูกค้าสำเร็จในแต่ละวัน |
| `inventory_snapshot` | `fact_demand_sales` | `INT` | รายวัน x SKU x DC | จำนวนสต็อกคงเหลือพร้อมจำหน่าย ตัดยอด ณ 23:59 น. |
| `forecast_demand_qty`| `fact_demand_sales` | `INT` | 30 วันล่วงหน้า | ปริมาณอุปสงค์คาดการณ์ 30 วันจาก AI Ensemble Model |
| `stock_cover_days` | `fact_demand_sales` | `DECIMAL(5,1)`| รายวัน x SKU x DC | วันครอบคลุมสต็อก = `inventory_snapshot / (forecast_30d / 30)` |
| `safety_stock` | `fact_demand_sales` | `INT` | ราย SKU x DC | สต็อกกันชนขั้นต่ำ = `Daily Demand * 21 วัน` |
| `reorder_point` | `fact_demand_sales` | `INT` | ราย SKU x DC | จุดสั่งซื้อซ้ำ = `(Daily Demand * Lead Time 14 วัน) + Safety Stock` |
| `wape_percent` | `fact_model_eval` | `DECIMAL(4,1)`| รายสัปดาห์ / SKU | WAPE = `(Σ|Actual - Forecast| / Σ Actual) * 100` |

---

## 3. โจทย์ข้อ 2: การออกแบบ Dashboard เชิงเล่าเรื่อง (Storytelling Dashboard Design)

### 3.1 ตรรกะการออกแบบ: Decision Backward Framework (ตามสไลด์ที่ 7)
การออกแบบเริ่มต้นจาก **"การตัดสินใจที่ต้องเกิดขึ้น"** ย้อนกลับไปยังข้อมูลและการแสดงผล:

```
[Decision]               [Signal]                 [Metric]               [Data]               [Design]
ต้องอนุมัติ PO ด่วน    ──► ตรวจพบ Demand Spike ──► Stock Cover Days  ──► Fact Demand     ──► Story Headline,
และโอนย้ายสต็อกข้ามคลัง    +40% ในพื้นที่ กทม.     เหลือเพียง 17.8 วัน   & Inventory Snapshot  Threshold Chart,
เพื่อกันของขาดใน 18 วัน    จากโรคระบาดระลอกใหม่    (ต่ำกว่าเกณฑ์ 21 วัน)    Grain: Daily/SKU     Exception Table
```

### 3.2 สูตร Data Storytelling (ตามสไลด์ที่ 18 ใน BusinessDashboard.pdf)
> **สูตรง่ายๆ ในสไลด์ที่ 18:**
> **"ตัวเลขสำคัญ + ทิศทาง + สาเหตุที่น่าสงสัย + Action"**

#### ตัวอย่างประโยคหลัก (Headline Story) บนหน้าจอ Dashboard:
> **🚨 แจ้งเตือนวิกฤตสต็อก (Critical Alert):**  
> *"สินค้า **Test Kit A (TK-A-001)** มีอุปสงค์พุ่งสูงขึ้น **+40.0%** (แตะระดับ **20,430 ชิ้น/เดือน**) จากสาเหตุ **'การระบาดของโรคทางเดินหายใจระลอกใหม่ในกรุงเทพฯ'** ขณะที่สต็อกคงเหลือปัจจุบันครอบคลุมได้เพียง **17.8 วัน** (ต่ำกว่าเกณฑ์ปลอดภัย 21 วัน)*  
> **👉 Action ที่ต้องตัดสินใจทันที:** *อนุมัติออกคำสั่งซื้อเร่งด่วน (Expedite PO) 10,000 ชิ้น และโอนย้ายสต็อกฉุกเฉิน 3,000 ชิ้นจากคลังอยุธยาภายใน 48 ชั่วโมง เพื่อป้องกันความเสียหาย Stockout ในโรงพยาบาลศูนย์ 14 แห่ง มูลค่ากว่า 1.2 ล้านบาท"*

### 3.3 นิยาม Metric ครบ 5 ช่อง (ตามสไลด์ที่ 10 ใน BusinessDashboard.pdf)

| ช่องที่ | 1. Name | 2. Formula | 3. Grain | 4. Dimension | 5. Target | ผู้รับผิดชอบ (Owner) |
|---|---|---|---|---|---|---|
| **KPI 1** | **Forecast Demand 30D** | $\sum (\text{Daily Forecast Units})$ 30 วันข้างหน้า | รายวัน x SKU x ภูมิภาค | Product, DC Hub, Time Horizon | สอดคล้องกับ Budget Plan ($\pm 5\%$) | Lead Supply Chain Planner |
| **KPI 2** | **Stock Cover Days** | $\frac{\text{Current Inventory}}{\text{Average Daily Forecast Demand}}$ | รายวัน x ราย SKU x รายคลัง | Product SKU, Warehouse Hub | $\ge 21$ วัน (ปกติ), $< 21$ วัน (เตือน), $< 15$ วัน (วิกฤต) | Head of Inventory Control |
| **KPI 3** | **Holdout WAPE Accuracy**| $1 - \frac{\sum |\text{Actual} - \text{Forecast}|}{\sum \text{Actual}}$ | รายสัปดาห์ / ราย SKU | Model Version, Outlier Filter | $\ge 90\%$ (ดีเยี่ยม), $< 80\%$ (Re-train) | Senior Data Scientist |
| **KPI 4** | **Stockout Risk SKUs** | $\text{COUNT}(\text{SKU where Cover Days} < 21)$ | รายวัน Portfolio สรุป | Category, Urgency, Risk Value | **0 SKU** (Zero Stockout Tolerance) | VP of Operations |

### 3.4 Visual Encoding และการเลือกชาร์ต (ตามสไลด์ที่ 13, 14, 15, 16)
1. **Main Story Chart (Time Series Line + Uncertainty Area Chart):**
   - *Chart Type:* Line & Area Chart (Slide 14: Trend over time)
   - *Visual Encoding:* Position (แกน Y แสดงปริมาณ, แกน X แสดงเวลา) เป็นคุณลักษณะที่สมองมนุษย์ถอดรหัสได้รวดเร็วและแม่นยำที่สุด (Slide 13)
   - *Thresholds:* เส้นประสีส้มแสดง Safety Stock (15,000 ชิ้น) และเส้นประสีแดงแสดง Stockout Danger Line
   - *Uncertainty Cone:* แถบสีม่วงโปร่งใสแสดง Confidence Interval 85% – 95% ของการคาดการณ์
2. **Stock Cover Days Ranking (Sorted Horizontal Bar Chart):**
   - *Chart Type:* Sorted Horizontal Bar Chart (Slide 14: Compare categories)
   - *Visual Encoding:* Length & Position เรียงลำดับจาก SKU ที่วิกฤตที่สุดไว้ด้านบน (Test Kit A = 17.8 วัน 🚨, Mask C = 25.0 วัน ⚠️, Antigen E = 26.1 วัน ⚠️, Gloves B = 39.6 วัน ✓, Syringe D = 44.7 วัน ✓) พร้อมเส้น Marker แสดงเกณฑ์ 21 วัน
3. **Semantic Colors (Slide 16):**
   - เขียว (`#16a34a`): สต็อกปลอดภัย / ดำเนินการแล้ว
   - ส้ม (`#d97706`): เฝ้าระวัง / เสี่ยงเข้าใกล้จุดสั่งซื้อซ้ำ
   - แดง (`#dc2626`): วิกฤต / ต้องลงมือแก้ไขทันที
4. **Alert & Exception Design (Slide 17):**
   - ไม่ใช่แค่แสดงสีแดง แต่ระบุ: "ใครต้องรับ Alert? รับแล้วต้องทำอะไร? ถ้าไม่ทำจะเสียหายอะไร?"
   - มีปุ่ม **"อนุมัติ Action ทันที"** แบบ Interactive ในตารางข้อยกเว้น เมื่อกดแล้วระบบจะอัปเดตสถานะทันที

---

## 4. Dashboard Brief Canvas (ตามสไลด์ที่ 29 ใน BusinessDashboard.pdf)

| หัวข้อ Canvas | รายละเอียดการวิเคราะห์และออกแบบสำหรับ Demandly |
|---|---|
| **1. User (ใครเป็นคนดูจอ?)** | **Tactical:** Supply Chain & Inventory Planner (เปิดดูทุกเช้า 09:00 น. เพื่อจัดการ Performance Gap และ Exception)<br>**Strategic:** VP of Operations & Supply Chain Director (เปิดดูรายสัปดาห์/รายเดือน เพื่อวางแผนงบประมาณจัดซื้อและกระจายความเสี่ยง) |
| **2. Decision (ต้องตัดสินใจอะไร?)** | 1) อนุมัติออกใบสั่งซื้อฉุกเฉิน (Expedite Purchase Order) จำนวนเท่าใด สำหรับ SKU ที่วิกฤต?<br>2) โยกย้ายสต็อกกันชน (Buffer Stock Transfer) จากศูนย์กระจายสินค้าใดมาเสริมพื้นที่วิกฤต เพื่อไม่ให้สินค้าขาดสต็อก? |
| **3. Metric (KPI หลัก 3-5 ตัว)** | 1) **Stock Cover Days** (เกณฑ์ปลอดภัย $\ge 21$ วัน)<br>2) **Forecast Demand 30D Volume** (เปรียบเทียบงบประมาณ)<br>3) **Holdout Forecast Accuracy / WAPE** (เป้าหมาย $\ge 90\%$)<br>4) **Stockout Risk SKU Count** (เป้าหมาย 0 SKU) |
| **4. Grain (ข้อมูลระดับใด?)** | **Daily Transaction per SKU per Regional Distribution Center (DC)**<br>สามารถวิเคราะห์ Drilldown จากภาพรวมระดับประเทศลงสู่ระดับรายสาขาและรายสินค้าได้ทันที |
| **5. Dimension (ต้องตัดมุมมองด้วยอะไร?)** | • **Product SKU:** Test Kit A, Gloves B, Mask C, Syringe D, Antigen E<br>• **Geography:** กรุงเทพฯ, ภาคกลาง, ภาคตะวันออก, ภาคเหนือ, ภาคใต้<br>• **Time Horizon:** 30 วัน, 60 วัน, 90 วัน<br>• **Scenario:** โรคระบาดฉับพลัน (Spike), ฤดูกาลปกติ (Baseline), การขนส่งล่าช้า (Disruption) |
| **6. Action (เห็นแล้วทำอะไรต่อ?)** | • **One-click Expedite PO:** ส่งคำสั่งซื้อเร่งด่วนเข้าสู่ระบบ ERP ทันที<br>• **Inter-DC Stock Transfer:** ออกใบคำขอขนส่งโยกย้ายสินค้าข้ามคลัง<br>• **SLA Preservation:** ป้องกันการสูญเสียยอดขาย 1.2 ล้านบาท และรักษา SLA ในการส่งมอบเวชภัณฑ์แก่โรงพยาบาล |

---

## 5. โจทย์ข้อ 3: รายชื่อกลุ่ม (รายวิชา Business Idea Creation)

### คณะวิทยาการสารสนเทศ มหาวิทยาลัยบูรพา
**รายชื่อสมาชิกกลุ่มผู้รับผิดชอบโครงการ:**

| ลำดับ | รหัสนิสิต | ชื่อ - นามสกุล | บทบาทหน้าที่ในโครงงาน (Project Role) | ความรับผิดชอบหลัก |
|:---:|:---:|:---|:---|:---|
| 1 | **67160168** | **นายณัฐวัฒน์ ศรีสุขใส** | Data Warehouse Architect & BI Specialist | • ออกแบบ Star Schema, ตาราง Fact & Dimensions<br>• นิยาม Semantic Metrics และ Data Dictionary<br>• ออกแบบชุดข้อมูลจำลอง 5 สถานการณ์ และการทดสอบ WAPE Indexing |
| 2 | **67160346** | **นายนิธิ พิมพ์ประเสริฐ** | Product Owner & Lead Full-stack Developer | • สถาปัตยกรรม Web Application และระบบ Demandly<br>• พัฒนา Interactive Storytelling Dashboard UI<br>• เชื่อมต่อโมเดล AI Demand Forecasting และจัดเตรียม Repository |

*(หมายเหตุ: สามารถแก้ไขหรือเพิ่มรายชื่อสมาชิกกลุ่มผ่านแบบฟอร์ม Interactive ในหน้าเว็บ Tab 4 ได้ โดยระบบจะบันทึกลง LocalStorage อัตโนมัติ)*

---

## 6. โจทย์ข้อ 4: การส่งงานในรูปแบบ Repository (Repository Submission Guide)

### 6.1 โครงสร้างโฟลเดอร์ใน Repository (`D:\University\KPI`)
```text
D:\University\KPI\
├── index.html                           # หน้าหลัก Web Application Dashboard
├── style.css                            # ดีไซน์ระบบ UI/UX (Enterprise BI Styling)
├── app.js                               # Interactive Logic, ชาร์ต SVG, ฟิลเตอร์, ระบบบันทึก
├── package.json                         # Node.js NPM Configuration (scripts dev, build, start)
├── vite.config.js                       # Vite Configuration สำหรับ Fast Local Server
├── start.cmd                            # Batch file คลิกเปิด Web Dashboard ทันที
├── BUSINESS_DASHBOARD_STORYTELLING.md   # รายงานส่งงานฉบับสมบูรณ์ (ครอบคลุมครบ 30 สไลด์)
├── README.md                            # คู่มือการใช้งานและรายละเอียดโครงงาน
├── BusinessDashboard.pdf                # เอกสารโจทย์และสไลด์การบรรยายของอาจารย์
└── datasets/                            # ข้อมูลตัวจริงสำหรับใช้ในระบบ
    ├── 01_stable_demand.csv             # ข้อมูลยอดขายคงที่ (1,004 KB)
    ├── 03_seasonal_demand.csv           # ข้อมูลยอดขายตามฤดูกาล (1,004 KB)
    ├── 04_demand_spike.csv              # ข้อมูลยอดขายพุ่งฉับพลันจากโรคระบาด (1,004 KB)
    └── demandly_star_schema.json        # นิยามโครงสร้าง Star Schema
```

### 6.2 ลิงก์ GitHub Repository
- **GitHub Repository URL:** [https://github.com/Nithi67160346/Storytelling-Business-Dashboard](https://github.com/Nithi67160346/Storytelling-Business-Dashboard)

### 6.3 วิธีการเปิดใช้งาน Web Application
1. **วิธีที่ 1 (สะดวกที่สุด - ดับเบิลคลิก):**  
   ดับเบิลคลิกที่ไฟล์ `start.cmd` ในโฟลเดอร์ `D:\University\KPI` เบราว์เซอร์จะเปิดหน้า Dashboard ขึ้นมาทันที
2. **วิธีที่ 2 (ผ่าน Python Local Server):**  
   เปิด PowerShell ในโฟลเดอร์นี้ แล้วรัน:
   ```powershell
   python -m http.server 3000
   ```
   จากนั้นเปิดบราวเซอร์ที่: `http://localhost:3000`
3. **วิธีที่ 3 (ผ่าน Node.js & Vite):**  
   ```powershell
   npm install
   npm run dev
   ```

---

## 7. สรุปความสอดคล้องกับเนื้อหาการเรียนการสอน (Mapping to Lecture Slides)

| สไลด์ใน BusinessDashboard.pdf | หลักการที่อาจารย์สอน | จุดที่นำมาประยุกต์ใช้ใน Web Dashboard |
|---|---|---|
| **Slide 2** | คิดจากธุรกิจ → แปลงเป็น Metric → ออกแบบจอให้ใช้ได้จริง | โครงสร้าง 4 Tab เริ่มจาก Problem & Story สู่ Metric และ Action |
| **Slide 3** | Data → Information → Insight → Action | การเปลี่ยนพฤติกรรมผู้ใช้ผ่านปุ่ม One-click Action Approval |
| **Slide 4 & 5** | Data Warehouse, Star Schema & Semantic Layer | Fact & Dimension schema, Data dictionary ใน Tab 2 |
| **Slide 6** | Dashboard (เร็ว) vs Report (ตาราง) vs Analysis (drilldown) | เน้นความเร็วในการตรวจจับ Exception ภายใน 5 วินาทีแรกที่ดูจอ |
| **Slide 7** | Decision Backward: Decision → Signal → Metric → Data → Design | Decision Backward Progression Bar บริเวณด้านบนของ Dashboard |
| **Slide 8 & 12** | Persona Rhythm: Tactical vs Strategic vs Operational | Persona Switcher ปรับเปลี่ยนมุมมองและเน้นตัวชี้วัดที่ต่างกัน |
| **Slide 9 & 10** | นิยาม Metric ครบ 5 ช่อง (Name, Formula, Grain, Dimension, Target) | ปุ่ม ℹ บน KPI Cards ทุกใบเพื่อเปิดดูนิยามครบ 5 ช่อง + Owner |
| **Slide 11** | Star Schema: Fact Table & Dimension Tables | ไดอะแกรมความสัมพันธ์ Star Schema และไฟล์ `demandly_star_schema.json` |
| **Slide 13 & 14** | Visual Encoding (Position, Length) & Chart Selection Map | Line Chart สำหรับ Trend และ Sorted Bar สำหรับ Compare categories |
| **Slide 15** | Layout: Eye Flow (Header → KPIs → Main Story → Exception) | ลำดับการจัดวางบนลงล่าง ซ้ายไปขวา ตามสายตามนุษย์ |
| **Slide 16 & 17** | Semantic Color & Alert Design (Threshold, Trend break, Forecast risk) | แถบสีและตาราง Action ที่ตอบว่าใครรับ alert, ทำอะไร, ไม่ทำเสียหายอะไร |
| **Slide 18** | Data Storytelling Headline: ตัวเลขสำคัญ + ทิศทาง + สาเหตุ + Action | Headline Callout Card ขนาดใหญ่ที่อัปเดตเรื่องราวแบบ Dynamic |
| **Slide 19** | Trust Layer: Freshness, Definition tooltip, Reconciliation | แถบแสดง Data Freshness, Audit trail, และ Data quality score ด้านล่าง |
| **Slide 20** | หลีกเลี่ยง Anti-patterns (Vanity metrics, Chart zoo, No target, Wrong grain)| มี Target ทุก KPI, ไร้กราฟฟุ่มเฟือย, Grain ชัดเจน, มีผู้รับผิดชอบกำกับ |
| **Slide 29** | Workshop: Dashboard Brief Canvas 6 ช่อง | แสดง Canvas 6 ช่อง พร้อม Wireframe และ Chart Rationale ใน Tab 3 |
