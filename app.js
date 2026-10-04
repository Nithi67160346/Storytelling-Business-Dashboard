// Demandly Storytelling Dashboard & BI Design Application
// รายวิชา Business Idea Creation & Data Warehouse

const SKU_DATA = {
  "test-kit-a": {
    id: "test-kit-a",
    name: "Test Kit A (Rapid Diagnostic)",
    code: "TK-A-001",
    category: "Diagnostic & Screening",
    region: "กรุงเทพฯ และปริมณฑล",
    demandForecast: 20430,
    forecastChange: 40.0,
    currentInventory: 12100,
    dailyBurnRate: 681,
    coverDays: 17.8,
    safetyStockDays: 21,
    reorderPointUnits: 14300,
    accuracyRate: 91.2,
    wapePercent: 8.8,
    riskLevel: "CRITICAL",
    headlineReason: "การระบาดของโรคทางเดินหายใจระลอกใหม่ในกรุงเทพฯ ส่งผลให้ยอดคัดกรองพุ่งสูงขึ้นฉับพลัน",
    recommendedAction: "ออกคำสั่งซื้อเร่งด่วน (Expedite PO) 10,000 ชิ้น และโอนย้ายสต็อก 3,000 ชิ้นจากคลังอยุธยาภายใน 48 ชม.",
    actionImpact: "ป้องกันสินค้าขาดสต็อกในโรงพยาบาลศูนย์ 14 แห่ง หลีกเลี่ยงความสูญเสียรายได้และชื่อเสียงกว่า 1.2 ล้านบาท",
    actionQty: 10000,
    history: [11200, 12500, 11900, 13400, 14600, 16100],
    forecastPoints: [20430, 22100, 19500, 17800],
  },
  "mask-c": {
    id: "mask-c",
    name: "Medical Mask Level 3",
    code: "MK-C-028",
    category: "Personal Protection",
    region: "ภาคตะวันออก",
    demandForecast: 38200,
    forecastChange: 12.0,
    currentInventory: 31800,
    dailyBurnRate: 1273,
    coverDays: 25.0,
    safetyStockDays: 21,
    reorderPointUnits: 26700,
    accuracyRate: 93.4,
    wapePercent: 6.6,
    riskLevel: "WARNING",
    headlineReason: "มลพิษทางอากาศและฝุ่นโรงงานอุตสาหกรรมในภาคตะวันออกเพิ่มความต้องการใช้งานอย่างต่อเนื่อง",
    recommendedAction: "ออกใบสั่งซื้อตามรอบปกติ เพิ่มจำนวน Lot ถัดไป 20,000 ชิ้น เพื่อรักษาระดับ Safety Stock",
    actionImpact: "รักษาค่า Stock Cover ให้อยู่เหนือ 25 วัน รองรับการสั่งซื้อจากนิคมอุตสาหกรรม",
    actionQty: 20000,
    history: [29000, 31000, 30500, 32400, 34100, 36000],
    forecastPoints: [38200, 39500, 38000, 37200],
  },
  "antigen-e": {
    id: "antigen-e",
    name: "Antigen Extraction Solution",
    code: "AG-E-052",
    category: "Laboratory Diagnostic",
    region: "ภาคใต้",
    demandForecast: 16800,
    forecastChange: 21.0,
    currentInventory: 14600,
    dailyBurnRate: 560,
    coverDays: 26.1,
    safetyStockDays: 21,
    reorderPointUnits: 11800,
    accuracyRate: 88.5,
    wapePercent: 11.5,
    riskLevel: "WARNING",
    headlineReason: "ฤดูกาลท่องเที่ยวและปริมาณผู้ป่วยต่างชาติที่เข้าตรวจสุขภาพในโรงพยาบาลเอกชนภาคใต้ขยายตัว",
    recommendedAction: "เจรจาขอลด Lead Time กับซัพพลายเออร์จาก 21 วันเหลือ 14 วัน และสั่งสำรอง 5,000 ชิ้น",
    actionImpact: "หลีกเลี่ยงความเสี่ยงในการขนส่งข้ามภาคช่วงมรสุมภาคใต้",
    actionQty: 5000,
    history: [11000, 11800, 12200, 13100, 13900, 14800],
    forecastPoints: [16800, 17900, 17200, 16400],
  },
  "gloves-b": {
    id: "gloves-b",
    name: "Nitrile Gloves Size M",
    code: "GL-B-014",
    category: "Personal Protection",
    region: "ภาคกลาง",
    demandForecast: 52000,
    forecastChange: 4.0,
    currentInventory: 68700,
    dailyBurnRate: 1733,
    coverDays: 39.6,
    safetyStockDays: 21,
    reorderPointUnits: 36400,
    accuracyRate: 95.8,
    wapePercent: 4.2,
    riskLevel: "NORMAL",
    headlineReason: "ยอดสั่งซื้อคงที่ มีสัญญาซื้อขายระยะยาวกับโรงพยาบาลประจำจังหวัด",
    recommendedAction: "สต็อกอยู่ในเกณฑ์สมบูรณ์มาก พร้อมทำหน้าที่เป็นคลังสำรองกลางเพื่อเกลี่ยสินค้าไปยังภูมิภาคอื่น",
    actionImpact: "สามารถแบ่งปัน Buffer 3,000 ชิ้นช่วยเหลือสาขากรุงเทพฯ ได้ทันทีโดยไม่กระทบ SLA",
    actionQty: 0,
    history: [48000, 49200, 48900, 50100, 51000, 51500],
    forecastPoints: [52000, 52500, 51800, 52200],
  },
  "syringe-d": {
    id: "syringe-d",
    name: "Safety Syringe 5ml",
    code: "SY-D-039",
    category: "Clinical Disposable",
    region: "ภาคเหนือ",
    demandForecast: 27600,
    forecastChange: -8.0,
    currentInventory: 41100,
    dailyBurnRate: 920,
    coverDays: 44.7,
    safetyStockDays: 21,
    reorderPointUnits: 19300,
    accuracyRate: 94.6,
    wapePercent: 5.4,
    riskLevel: "NORMAL",
    headlineReason: "โครงการฉีดวัคซีนประจำฤดูกาลเสร็จสิ้นลง ทำให้อุปสงค์ชะลอตัวลงตามคาดการณ์",
    recommendedAction: "ชะลอการสั่งผลิตรอบใหม่ 2 สัปดาห์ เพื่อระบายสต็อกคงเหลือและประหยัด Holding Cost",
    actionImpact: "ประหยัดต้นทุนจมและลดพื้นที่จัดเก็บในคลังเชียงใหม่ได้ 18%",
    actionQty: 0,
    history: [32000, 31500, 30800, 29900, 29000, 28200],
    forecastPoints: [27600, 26800, 26500, 27000],
  },
};

const METRIC_DEFS = {
  forecastDemand: {
    name: "Demand Forecast 30-Day",
    formula: "Σ (Daily Forecast Units) ล่วงหน้า 30 วัน คำนวณด้วย Statistical & AI Ensemble",
    grain: "ระดับรายวัน (Daily) x รายสินค้า (SKU) x รายภูมิภาค (Region)",
    dimension: "Product SKU, DC Region, Date Horizon, Healthcare Scenario",
    target: "ตามแผนงบประมาณอุปสงค์ (±5% ของเป้าขาย)",
    owner: "Lead Supply Chain Planner",
  },
  coverDays: {
    name: "Stock Cover Days (วันครอบคลุมสต็อก)",
    formula: "Current Available Inventory / Average Daily Forecast Demand",
    grain: "ระดับรายวัน (Daily Snapshot) x รายคลังสินค้าสาขา (Warehouse)",
    dimension: "Product SKU, Warehouse Location, Supplier Lead Time",
    target: ">= 21 วัน (ปกติ/เขียว), 15 - 20 วัน (เฝ้าระวัง/ส้ม), < 15 วัน (วิกฤต/แดง)",
    owner: "Head of Inventory Control",
  },
  wapeAccuracy: {
    name: "Holdout Forecast WAPE & Accuracy",
    formula: "Accuracy = 1 - (Σ|Actual - Forecast| / Σ Actual) [คำนวณย้อนหลัง 28 วัน]",
    grain: "ระดับรายสัปดาห์ / รายเดือน ต่อโมเดลที่ใช้วัด",
    dimension: "Model Architecture, Forecasting Horizon, Outlier Filter",
    target: ">= 90% (ดีเยี่ยม), 80 - 89% (ยอมรับได้), < 80% (ต้อง Re-train โมเดล)",
    owner: "Senior Data Scientist & BI Architect",
  },
  riskSkus: {
    name: "Critical Stockout Risk SKUs",
    formula: "COUNT(SKU ที่ Stock Cover Days < Minimum Safety Threshold 21 วัน)",
    grain: "ระดับสรุปภาพรวม Portfolio รายวัน",
    dimension: "Risk Category, Urgency Level, Financial Value at Risk",
    target: "0 SKU (Zero Stockout Tolerance สำหรับเวชภัณฑ์วิกฤต)",
    owner: "VP of Operations & Healthcare Logistics",
  },
};

const DEFAULT_MEMBERS = [
  {
    id: "nithi",
    name: "นายนิธิ พิมพ์ประเสริฐ",
    studentId: "67160346",
    role: "Product Owner, Data Warehouse & Full-stack Developer",
    duty: "ออกแบบและพัฒนา Web Application, Star Schema, Semantic Layer, Demand Forecasting และ Storytelling Dashboard",
  },
];

// App State
let currentSku = "test-kit-a";
let currentPersona = "tactical";
let approvedActions = new Set();
let members = [...DEFAULT_MEMBERS];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initMembers();
  setupNavigation();
  setupFilters();
  setupPersona();
  setupPopovers();
  setupActionTable();
  setupDownloads();
  renderAll();
});

// Member Storage
function initMembers() {
  try {
    const saved = localStorage.getItem("kpi_group_members");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Keep only current author
      members = parsed.filter(m => m.studentId === "67160346");
      if (!members.length) members = [...DEFAULT_MEMBERS];
      saveMembers();
    }
  } catch (e) {
    console.warn("Could not read members from localStorage", e);
  }
}

function saveMembers() {
  try {
    localStorage.setItem("kpi_group_members", JSON.stringify(members));
  } catch (e) {
    console.warn("Could not save members", e);
  }
}

// Navigation Tabs
function setupNavigation() {
  const tabs = document.querySelectorAll(".nav-tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `tab-${target}`);
      });

      if (target === "dashboard") {
        renderChart();
      }
    });
  });
}

// Filters
function setupFilters() {
  const skuSelect = document.getElementById("select-sku");
  if (skuSelect) {
    skuSelect.addEventListener("change", (e) => {
      currentSku = e.target.value;
      renderAll();
    });
  }

  const regionSelect = document.getElementById("select-region");
  if (regionSelect) {
    regionSelect.addEventListener("change", () => {
      showToast("ปรับมุมมองตามภูมิภาคเรียบร้อยแล้ว");
      renderAll();
    });
  }

  const scenarioSelect = document.getElementById("select-scenario");
  if (scenarioSelect) {
    scenarioSelect.addEventListener("change", () => {
      showToast("อัปเดตโมเดลการพยากรณ์ตามสถานการณ์ใหม่");
      renderAll();
    });
  }
}

// Persona Switcher
function setupPersona() {
  const buttons = document.querySelectorAll(".persona-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentPersona = btn.dataset.persona;
      showToast(`เปลี่ยนโหมดการตัดสินใจเป็น: ${btn.textContent.trim()}`);
      renderAll();
    });
  });
}

// Popovers for Metric Definitions
function setupPopovers() {
  const infoButtons = document.querySelectorAll(".info-btn");
  infoButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const metricKey = btn.dataset.metric;
      togglePopover(btn, metricKey);
    });
  });

  document.addEventListener("click", () => {
    closeAllPopovers();
  });
}

function togglePopover(btn, metricKey) {
  const card = btn.closest(".kpi-card");
  const existing = card.querySelector(".metric-popover");

  closeAllPopovers();

  if (existing) return;

  const def = METRIC_DEFS[metricKey];
  if (!def) return;

  const popover = document.createElement("div");
  popover.className = "metric-popover";
  popover.innerHTML = `
    <div class="popover-header">
      <span>${def.name}</span>
      <button type="button" style="border:none;background:none;cursor:pointer;font-weight:bold;">✕</button>
    </div>
    <div class="popover-row"><span class="popover-key">1. Name:</span><span class="popover-val">${def.name}</span></div>
    <div class="popover-row"><span class="popover-key">2. Formula:</span><span class="popover-val">${def.formula}</span></div>
    <div class="popover-row"><span class="popover-key">3. Grain:</span><span class="popover-val">${def.grain}</span></div>
    <div class="popover-row"><span class="popover-key">4. Dimension:</span><span class="popover-val">${def.dimension}</span></div>
    <div class="popover-row"><span class="popover-key">5. Target:</span><span class="popover-val">${def.target}</span></div>
    <div class="popover-row"><span class="popover-key">Owner:</span><span class="popover-val">${def.owner}</span></div>
  `;

  popover.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    popover.remove();
  });

  popover.addEventListener("click", (e) => e.stopPropagation());

  card.appendChild(popover);
}

function closeAllPopovers() {
  document.querySelectorAll(".metric-popover").forEach((p) => p.remove());
}

// Action Table & Approve Action
function setupActionTable() {
  // delegation handled in renderActionTable
}

function approveAction(skuId) {
  approvedActions.add(skuId);
  const data = SKU_DATA[skuId];
  showToast(`✓ อนุมัติแผนรองรับสำหรับ ${data?.name || skuId} เรียบร้อยแล้ว`);
  renderAll();
}

// Downloads
function setupDownloads() {
  document.getElementById("btn-download-stable")?.addEventListener("click", () => {
    downloadTextFile(
      "demandly_01_stable_demand.csv",
      "date,product_code,region,sales_quantity,inventory\n2025-05-01,TK-A-001,Bangkok,650,14500\n2025-05-02,GL-B-014,Central,1700,69000\n2025-05-03,MK-C-028,Eastern,1250,32000\n2025-05-04,SY-D-039,North,910,41500\n2025-05-05,AG-E-052,South,540,15000\n"
    );
  });

  document.getElementById("btn-download-spike")?.addEventListener("click", () => {
    downloadTextFile(
      "demandly_04_demand_spike_outbreak.csv",
      "date,product_code,region,sales_quantity,inventory,anomaly_score\n2025-06-01,TK-A-001,Bangkok,980,12100,0.89\n2025-06-02,TK-A-001,Bangkok,1150,10950,0.94\n2025-06-03,TK-A-001,Bangkok,1240,9710,0.97\n2025-06-04,TK-A-001,Bangkok,1310,8400,0.98\n"
    );
  });

  document.getElementById("btn-download-schema")?.addEventListener("click", () => {
    fetch("datasets/demandly_star_schema.json")
      .then((res) => res.text())
      .then((text) => downloadTextFile("demandly_star_schema.json", text, "application/json"))
      .catch(() => {
        downloadTextFile("demandly_star_schema.json", JSON.stringify({ status: "ok" }), "application/json");
      });
  });
}

function downloadTextFile(filename, content, mime = "text/csv;charset=utf-8;") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`✓ ดาวน์โหลดไฟล์ ${filename} สำเร็จ`);
}

// Toast Notification
function showToast(msg) {
  let toast = document.querySelector(".toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = "block";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.display = "none";
  }, 3500);
}

// Master Render
function renderAll() {
  const data = SKU_DATA[currentSku];
  renderHeadline(data);
  renderKpis(data);
  renderChart(data);
  renderSortedBars();
  renderActionTable();
  renderMembers();
}

// Render Storytelling Headline (Slide 18)
function renderHeadline(data) {
  const card = document.getElementById("storyline-card");
  const pill = document.getElementById("story-pill");
  const text = document.getElementById("storyline-text");
  const action = document.getElementById("storyline-action");

  if (!card || !pill || !text || !action) return;

  const isApproved = approvedActions.has(data.id);
  const direction = data.forecastChange >= 0 ? "พุ่งสูงขึ้น" : "ชะลอตัวลง";
  const sign = data.forecastChange >= 0 ? "+" : "";

  card.className = "storyline-card";

  if (isApproved) {
    card.classList.add("success-tone");
    pill.className = "story-pill pill-success";
    pill.textContent = "อนุมัติ Action เรียบร้อยแล้ว";
    text.innerHTML = `✅ <strong>แผนรองรับเสร็จสมบูรณ์:</strong> ดำเนินการสั่งซื้อด่วนจำนวน ${data.actionQty.toLocaleString()} ชิ้น และจัดการโยกย้ายสต็อกสำหรับ ${data.name} เรียบร้อยแล้ว คาดการณ์ Stock Cover จะฟื้นกลับสู่ระดับ 32.5 วันอย่างปลอดภัย`;
    action.innerHTML = `<strong>สถานะปัจจุบัน:</strong> ออกใบคำขอเบิก/สั่งซื้อในระบบ ERP แล้ว · หัวหน้าคลังกำลังประสานงานจัดส่ง`;
    return;
  }

  if (data.riskLevel === "CRITICAL") {
    pill.className = "story-pill pill-danger";
    pill.textContent = "🚨 สัญญาณวิกฤตสต็อก (Critical Alert)";
    text.innerHTML = `สินค้า <strong>${data.name}</strong> มีอุปสงค์ ${direction} <strong>${sign}${data.forecastChange}%</strong> (แตะ ${data.demandForecast.toLocaleString()} ชิ้น/เดือน) จากสาเหตุ <em>&ldquo;${data.headlineReason}&rdquo;</em> ขณะที่สต็อกคงเหลือครอบคลุมเพียง <strong>${data.coverDays.toFixed(1)} วัน</strong> (ต่ำกว่าเกณฑ์ความปลอดภัย ${data.safetyStockDays} วัน)`;
    action.innerHTML = `<strong>👉 Action ที่ต้องตัดสินใจทันที:</strong> ${data.recommendedAction} <br><span style="font-size:12px;opacity:0.9;">(ผลกระทบหากแก้ไข: ${data.actionImpact})</span>`;
  } else if (data.riskLevel === "WARNING") {
    card.classList.add("warning-tone");
    pill.className = "story-pill pill-warning";
    pill.textContent = "⚠️ สัญญาณเฝ้าระวัง (Warning Signal)";
    text.innerHTML = `สินค้า <strong>${data.name}</strong> อุปสงค์ปรับตัวขึ้น <strong>${sign}${data.forecastChange}%</strong> จากสาเหตุ <em>&ldquo;${data.headlineReason}&rdquo;</em> สต็อกคงเหลือครอบคลุม ${data.coverDays.toFixed(1)} วัน เริ่มเข้าใกล้จุดสั่งซื้อซ้ำ`;
    action.innerHTML = `<strong>👉 Action ที่แนะนำ:</strong> ${data.recommendedAction}`;
  } else {
    card.classList.add("success-tone");
    pill.className = "story-pill pill-success";
    pill.textContent = "✔️ สถานะสต็อกและอุปสงค์ปกติ (Normal Health)";
    text.innerHTML = `สินค้า <strong>${data.name}</strong> อุปสงค์สม่ำเสมอ (${sign}${data.forecastChange}%) สต็อกปัจจุบันครอบคลุมได้ถึง ${data.coverDays.toFixed(1)} วัน ความแม่นยำโมเดลอยู่ที่ ${data.accuracyRate}%`;
    action.innerHTML = `<strong>👉 Action ที่แนะนำ:</strong> ${data.recommendedAction}`;
  }
}

// Render KPI Cards
function renderKpis(data) {
  const elDemand = document.getElementById("kpi-demand-val");
  const elDemandBadge = document.getElementById("kpi-demand-badge");
  if (elDemand && elDemandBadge) {
    elDemand.textContent = data.demandForecast.toLocaleString();
    const sign = data.forecastChange >= 0 ? "↑" : "↓";
    elDemandBadge.textContent = `${sign} ${Math.abs(data.forecastChange)}% MoM`;
    elDemandBadge.className = `kpi-badge ${data.forecastChange >= 20 ? "pill-danger" : data.forecastChange >= 10 ? "pill-warning" : "pill-success"}`;
  }

  const elCover = document.getElementById("kpi-cover-val");
  const elCoverBadge = document.getElementById("kpi-cover-badge");
  if (elCover && elCoverBadge) {
    elCover.textContent = `${data.coverDays.toFixed(1)} วัน`;
    elCoverBadge.textContent = data.coverDays < 20 ? "วิกฤต (<21 วัน)" : data.coverDays < 30 ? "เฝ้าระวัง" : "ปลอดภัย";
    elCoverBadge.className = `kpi-badge ${data.coverDays < 20 ? "pill-danger" : data.coverDays < 30 ? "pill-warning" : "pill-success"}`;
  }

  const elAcc = document.getElementById("kpi-acc-val");
  const elAccBadge = document.getElementById("kpi-acc-badge");
  if (elAcc && elAccBadge) {
    elAcc.textContent = `${data.accuracyRate.toFixed(1)}%`;
    elAccBadge.textContent = `WAPE ${data.wapePercent.toFixed(1)}%`;
    elAccBadge.className = "kpi-badge pill-success";
  }

  const elRisk = document.getElementById("kpi-risk-val");
  const elRiskBadge = document.getElementById("kpi-risk-badge");
  if (elRisk && elRiskBadge) {
    const unapprovedCount = Object.values(SKU_DATA).filter((s) => s.riskLevel !== "NORMAL" && !approvedActions.has(s.id)).length;
    elRisk.textContent = `${unapprovedCount} รายการ`;
    elRiskBadge.textContent = unapprovedCount === 0 ? "จัดการครบถ้วน" : "ต้องลงมือแก้ไข";
    elRiskBadge.className = `kpi-badge ${unapprovedCount === 0 ? "pill-success" : "pill-warning"}`;
  }
}

// Render SVG Chart (Slide 14 & 15)
function renderChart() {
  const data = SKU_DATA[currentSku];
  const container = document.getElementById("chart-svg-wrap");
  if (!container) return;

  const width = 680;
  const height = 270;
  const maxVal = 26000;

  const actualPoints = data.history.map((val, i) => ({
    x: 45 + i * 65,
    y: 230 - (val / maxVal) * 185,
    val,
  }));

  const lastActual = actualPoints[actualPoints.length - 1];

  const forecastPoints = data.forecastPoints.map((val, i) => ({
    x: lastActual.x + (i + 1) * 65,
    y: 230 - (val / maxVal) * 185,
    val,
  }));

  const actualPath = actualPoints.reduce((acc, p, i) => `${acc} ${i === 0 ? "M" : "L"} ${p.x},${p.y}`, "");
  const forecastPath = `M ${lastActual.x},${lastActual.y} ` + forecastPoints.map((p) => `L ${p.x},${p.y}`).join(" ");

  // Safety Stock line (15,000 units)
  const safetyY = 230 - (15000 / maxVal) * 185;
  // Out of stock line (5,000 units)
  const stockoutY = 230 - (5000 / maxVal) * 185;

  // Uncertainty Cone polygon
  const topPoints = forecastPoints.map((p) => `${p.x},${Math.max(20, p.y - 18)}`).join(" ");
  const bottomPoints = forecastPoints.slice().reverse().map((p) => `${p.x},${Math.min(230, p.y + 18)}`).join(" ");
  const conePolygon = `${lastActual.x},${lastActual.y} ${topPoints} ${bottomPoints}`;

  const monthLabels = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.(F)", "ส.ค.(F)", "ก.ย.(F)", "ต.ค.(F)"];

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" style="width:100%;height:100%;" role="img">
      <!-- Grid -->
      ${[40, 85, 130, 175, 220].map((y) => `<line x1="35" y1="${y}" x2="${width - 15}" y2="${y}" stroke="#f1f5f9" stroke-width="1"/>`).join("")}

      <!-- Safety Stock Threshold -->
      <line x1="35" y1="${safetyY}" x2="${width - 15}" y2="${safetyY}" stroke="#d97706" stroke-width="1.8" stroke-dasharray="5,4"/>
      <text x="${width - 10}" y="${safetyY + 3}" fill="#d97706" font-size="10" font-weight="bold">Safety (15k)</text>

      <!-- Stockout Threshold -->
      <line x1="35" y1="${stockoutY}" x2="${width - 15}" y2="${stockoutY}" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="${width - 10}" y="${stockoutY + 3}" fill="#dc2626" font-size="10" font-weight="bold">Danger</text>

      <!-- Now Divider -->
      <line x1="${lastActual.x}" y1="20" x2="${lastActual.x}" y2="235" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>
      <rect x="${lastActual.x - 32}" y="8" width="64" height="18" rx="4" fill="#f1f5f9"/>
      <text x="${lastActual.x}" y="20" text-anchor="middle" fill="#475569" font-size="10" font-weight="bold">ปัจจุบัน</text>

      <!-- Uncertainty Cone -->
      <polygon points="${conePolygon}" fill="rgba(124, 58, 237, 0.12)"/>

      <!-- Actual Line -->
      <path d="${actualPath}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>

      <!-- Actual Circles -->
      ${actualPoints.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>`).join("")}

      <!-- Forecast Line -->
      <path d="${forecastPath}" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="6,4" stroke-linecap="round"/>

      <!-- Forecast Circles -->
      ${forecastPoints.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#7c3aed" stroke="#ffffff" stroke-width="2"/>`).join("")}

      <!-- Surge callout on Test Kit A -->
      ${data.id === "test-kit-a" ? `
        <g transform="translate(${lastActual.x + 30}, 45)">
          <rect x="-10" y="-12" width="115" height="24" rx="6" fill="#dc2626"/>
          <text x="47" y="3" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">🚨 Surge +40% (ระบาด)</text>
        </g>
      ` : ""}

      <!-- X Axis -->
      ${monthLabels.map((lbl, idx) => `<text x="${45 + idx * 65}" y="254" text-anchor="middle" fill="#64748b" font-size="11" font-weight="${idx >= 6 ? "bold" : "normal"}">${lbl}</text>`).join("")}
    </svg>
  `;
}

// Render Sorted Bars
function renderSortedBars() {
  const container = document.getElementById("sorted-bars-wrap");
  if (!container) return;

  const sorted = Object.values(SKU_DATA).sort((a, b) => a.coverDays - b.coverDays);

  container.innerHTML = sorted
    .map((item) => {
      const isCrit = item.coverDays < 20;
      const isWarn = item.coverDays >= 20 && item.coverDays < 30;
      const fillColor = isCrit ? "#dc2626" : isWarn ? "#d97706" : "#16a34a";
      const isSelected = item.id === currentSku;

      return `
        <div class="sorted-item ${isSelected ? "selected" : ""}" data-id="${item.id}">
          <div class="sorted-meta">
            <span style="font-weight:${isSelected ? "750" : "600"}; color:#1e293b;">
              ${item.name.split(" ")[0]} (${item.code})
            </span>
            <span style="color:${fillColor}; font-weight:750;">
              ${item.coverDays.toFixed(1)} วัน ${isCrit ? "🚨" : isWarn ? "⚠️" : "✓"}
            </span>
          </div>
          <div class="sorted-track">
            <div class="sorted-threshold-line" style="left:42%;" title="เกณฑ์ 21 วัน"></div>
            <div class="sorted-fill" style="width:${Math.min(100, (item.coverDays / 50) * 100)}%; background:${fillColor};"></div>
          </div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll(".sorted-item").forEach((el) => {
    el.addEventListener("click", () => {
      currentSku = el.dataset.id;
      const select = document.getElementById("select-sku");
      if (select) select.value = currentSku;
      renderAll();
    });
  });
}

// Render Action Table
function renderActionTable() {
  const tbody = document.getElementById("action-table-body");
  if (!tbody) return;

  tbody.innerHTML = Object.values(SKU_DATA)
    .map((item) => {
      const isApproved = approvedActions.has(item.id);
      const isCrit = item.riskLevel === "CRITICAL";
      const isWarn = item.riskLevel === "WARNING";
      const isSelected = item.id === currentSku;

      return `
        <tr style="background:${isSelected ? "#f8fafc" : "transparent"}">
          <td>
            <span class="story-pill ${isCrit ? "pill-danger" : isWarn ? "pill-warning" : "pill-success"}">
              ${isCrit ? "วิกฤต (Critical)" : isWarn ? "เฝ้าระวัง" : "ปกติ"}
            </span>
          </td>
          <td>
            <strong>${item.name}</strong>
            <div style="font-size:11px;color:#64748b;">${item.code} · ${item.region}</div>
          </td>
          <td>
            <span>${item.headlineReason}</span>
            <div style="font-size:11px;color:#2563eb;font-weight:600;">
              Forecast ${item.forecastChange >= 0 ? "+" : ""}${item.forecastChange}% · สต็อก ${item.coverDays.toFixed(1)} วัน
            </div>
          </td>
          <td style="color:${isCrit ? "#b91c1c" : "#475569"}; font-size:12px;">
            ${item.actionImpact}
          </td>
          <td style="font-weight:600; color:#1e40af; font-size:12px;">
            ${item.recommendedAction}
          </td>
          <td>
            ${
              isApproved
                ? `<span class="action-btn done">✓ ดำเนินการแล้ว</span>`
                : `<button type="button" class="action-btn" data-action-id="${item.id}">อนุมัติ Action ทันที</button>`
            }
          </td>
        </tr>
      `;
    })
    .join("");

  tbody.querySelectorAll(".action-btn[data-action-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      approveAction(btn.dataset.actionId);
    });
  });
}

// Render Members
function renderMembers() {
  const container = document.getElementById("members-grid-wrap");
  if (!container) return;

  container.innerHTML = members
    .map(
      (m) => `
      <div class="member-box">
        <div class="avatar-circle">${m.name.replace(/^(นาย|นางสาว|นาง)/, "").charAt(0) || "👤"}</div>
        <div class="member-content">
          <h4 class="member-title">${m.name}</h4>
          <span class="member-student-id">รหัสนิสิต: ${m.studentId}</span>
          <span class="member-job">บทบาท: ${m.role}</span>
          <p class="member-desc"><strong>หน้าที่:</strong> ${m.duty}</p>
        </div>
      </div>
    `
    )
    .join("");
}
