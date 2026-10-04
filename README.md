ข้อมูลผู้จัดทำโครงงาน : นายนิธิ วรรณวงษ์ (รหัสนิสิต: 67160346)
# Demandly — Storytelling Business Dashboard & BI Canvas
## รายวิชา Business Idea Creation & Data Warehouse / Business Intelligence

โปรเจกต์เว็บแอปพลิเคชัน Dashboard เชิงเล่าเรื่อง (Storytelling Dashboard) สำหรับสตาร์ทอัพ **Demandly (AI Demand Forecasting & Healthcare Inventory Logistics)**

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
├── BUSINESS_DASHBOARD_STORYTELLING.md   # รายงานส่งงานฉบับสมบูรณ์
├── README.md                            # คู่มือการใช้งานนี้
├── BusinessDashboard.pdf                # เอกสารโจทย์และสไลด์บรรยายของอาจารย์
└── datasets/                            # ชุดข้อมูลที่ใช้ในระบบ
    ├── 01_stable_demand.csv             # ยอดขายคงที่
    ├── 03_seasonal_demand.csv           # ยอดขายตามฤดูกาล
    ├── 04_demand_spike.csv              # ยอดขายพุ่งจากโรคระบาด
    └── demandly_star_schema.json        # โครงสร้าง Star Schema
```
