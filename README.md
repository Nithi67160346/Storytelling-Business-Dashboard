# Demandly — Storytelling Business Dashboard & BI Canvas
## รายวิชา Business Idea Creation & Data Warehouse / Business Intelligence

โปรเจกต์เว็บแอปพลิเคชัน Dashboard เชิงเล่าเรื่อง (Storytelling Dashboard) ออกแบบตามหลักสูตรการสอนในเอกสาร `BusinessDashboard.pdf` ครบทุกหัวข้อ
เพื่อตอบโจทย์ทางธุรกิจของสตาร์ทอัพ **Demandly (AI Demand Forecasting & Healthcare Inventory Logistics)**

---

## 📌 สิ่งที่ส่งตามโจทย์ของอาจารย์ 4 ข้อ

1. **📁 Data ที่ใช้ (Datasets & Star Schema):**
   - มีชุดข้อมูลในโฟลเดอร์ `datasets/` (`01_stable_demand.csv`, `03_seasonal_demand.csv`, `04_demand_spike.csv`, `demandly_star_schema.json`)
   - มีการออกแบบ **Star Schema Architecture** (Fact Table `fact_demand_sales` + 4 Dimension Tables) ตามสไลด์ที่ 11
   - มีตาราง Data Dictionary และ Data Preview ในหน้าเว็บพร้อมปุ่มดาวน์โหลดไฟล์จริง
2. **📊 Dashboard เชิงเล่าเรื่อง (Storytelling Dashboard):**
   - ออกแบบตามหลัก **Decision Backward Framework** (Decision → Signal → Metric → Data → Design)
   - หน้าจอมี **Storytelling Headline** ตามสูตรสไลด์ 18: *"ตัวเลขสำคัญ + ทิศทาง + สาเหตุที่น่าสงสัย + Action"*
   - **4 KPI Cards** พร้อมปุ่มกดดูนิยามครบ 5 ช่อง (Name, Formula, Grain, Dimension, Target, Owner) ตามสไลด์ 10
   - **Main Story Chart** (Line & Area Chart) แสดง Actual vs AI Forecast vs Safety Stock vs Out-of-Stock Danger
   - **Sorted Horizontal Bar Chart** เปรียบเทียบ Stock Cover Days ทุก SKU
   - **Exception Action Matrix** ระบุใครรับ alert, ทำอะไร, ไม่ทำเสียหายอะไร พร้อมปุ่มกด "อนุมัติ Action ทันที"
   - **Trust Layer** แสดง Data Freshness และ Reconciliation
   - สลับมุมมองตามตำแหน่งงานได้ (Tactical, Strategic, Operational)
3. **👥 รายชื่อกลุ่ม (Group Members):**
   - **นายณัฐวัฒน์ ศรีสุขใส (รหัสนิสิต: 67160168)** — Data Warehouse Architect & BI Specialist
   - **นายนิธิ พิมพ์ประเสริฐ (รหัสนิสิต: 67160346)** — Product Owner & Lead Full-stack Developer
   - ระบบ Interactive Member Management สำหรับแก้ไขหรือเพิ่มสมาชิกในทีม
4. **📦 ส่งเป็น Repository:**
   - โครงสร้าง Git Repository พร้อมใช้งาน
   - เอกสารรายงานฉบับสมบูรณ์: `BUSINESS_DASHBOARD_STORYTELLING.md`
   - ลิงก์ GitHub: [https://github.com/Nithi67160346/Storytelling-Business-Dashboard](https://github.com/Nithi67160346/Storytelling-Business-Dashboard)

---

## 🚀 วิธีการเปิดใช้งาน Web Application

### วิธีที่ 1: ดับเบิลคลิกไฟล์ (ง่ายและเร็วที่สุด)
ดับเบิลคลิกที่ไฟล์:
```cmd
start.cmd
```
ระบบจะเปิดหน้า Web Dashboard บนเว็บเบราว์เซอร์ให้อัตโนมัติทันที

### วิธีที่ 2: รันผ่าน Python Web Server
```powershell
python -m http.server 3000
```
จากนั้นเปิดบราวเซอร์ไปที่: `http://localhost:3000`

### วิธีที่ 3: รันผ่าน Node.js & Vite
```powershell
npm install
npm run dev
```

---

## 📂 โครงสร้างโฟลเดอร์ในโปรเจกต์
```text
D:\University\KPI\
├── index.html                           # หน้าเว็บหลัก Storytelling Dashboard
├── style.css                            # ดีไซน์ระบบ UI/UX (Responsive BI Style)
├── app.js                               # การทำงาน Interactive, SVG Charts, Logic
├── package.json                         # Node.js NPM dependencies & scripts
├── vite.config.js                       # Vite Configuration
├── start.cmd                            # ตัวเรียกเปิดเว็บด้วยการคลิกครั้งเดียว
├── BUSINESS_DASHBOARD_STORYTELLING.md   # รายงานส่งงานฉบับสมบูรณ์ (ครอบคลุมครบ 30 สไลด์)
├── README.md                            # คู่มือการใช้งานนี้
├── BusinessDashboard.pdf                # เอกสารโจทย์และสไลด์บรรยายของอาจารย์
└── datasets/                            # ชุดข้อมูลที่ใช้ในระบบ
    ├── 01_stable_demand.csv             # ยอดขายคงที่
    ├── 03_seasonal_demand.csv           # ยอดขายตามฤดูกาล
    ├── 04_demand_spike.csv              # ยอดขายพุ่งจากโรคระบาด
    └── demandly_star_schema.json        # โครงสร้าง Star Schema
```
