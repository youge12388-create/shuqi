const plans = {
  starter: {
    title: "AI操盘手",
    price: "¥999",
    type: "适合初次系统学习AI工具的个人和团队",
    summary: "用一套清晰课程和实操模板，让客户快速掌握海报、视频、PPT、音乐、智能体搭建等高频AI能力。",
    modules: ["海报生成", "视频制作", "一键PPT", "音乐生成", "智能体搭建", "数字人SOP"],
    outcomes: ["先把AI工具学会", "先验证AI是否真的能用", "为下一层升级建立判断依据"],
    flow: ["输入业务问题", "选择工具模块", "完成内容产出"]
  },
  pro: {
    title: "AI商业效率作战包",
    price: "¥12800",
    type: "适合希望团队直接用起来、老板拿回去就能部署的场景",
    summary: "把工具、流程、模板和设备整理成一套标准作战包，减少团队从零摸索的时间成本。",
    modules: ["标准工具包", "老板入口", "团队流程", "场景模板", "交付SOP", "售后跟进"],
    outcomes: ["老板拿回去就能直接用", "团队按统一流程执行", "产品交付更标准更稳定"],
    flow: ["确认团队场景", "交付标准作战包", "培训并跑通流程"]
  },
  custom: {
    title: "企业专属智能体系统",
    price: "¥19800",
    type: "适合业务流程更复杂、需要按行业和岗位定制的企业",
    summary: "围绕企业行业、岗位和客户流程搭建专属系统，让AI真正进入企业的日常经营。",
    modules: ["业务诊断", "流程设计", "智能体搭建", "团队训练", "验收清单", "复盘优化"],
    outcomes: ["按企业真实流程配置系统", "把AI能力装进岗位工作", "交付后还能继续迭代升级"],
    flow: ["梳理业务流程", "定制智能体系统", "验收并持续优化"]
  }
};

let activePlan = "starter";

function syncDeviceMode() {
  const root = document.documentElement;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const isCompact = window.matchMedia("(max-width: 720px)").matches;

  root.dataset.device = isCompact ? "mobile" : "desktop";
  root.dataset.input = isTouch ? "touch" : "pointer";
}

function setPlan(key) {
  activePlan = key;
  const plan = plans[key];

  document.querySelectorAll(".product-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.plan === key);
  });

  document.querySelector("#stageTitle").textContent = plan.title;
  document.querySelector("#stageSummary").textContent = plan.summary;
  document.querySelector("#detailType").textContent = plan.type;
  document.querySelector("#detailTitle").textContent = plan.title;
  document.querySelector("#detailSummary").textContent = plan.summary;
  document.querySelector("#planSelect").value = key;

  document.querySelector("#stageTags").innerHTML = plan.flow.map((item) => `<span>${item}</span>`).join("");
  document.querySelector("#detailModules").innerHTML = plan.modules.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#detailOutcomes").innerHTML = plan.outcomes.map((item) => `<li>${item}</li>`).join("");

  drawWorkflow(plan);
}

function drawWorkflow(plan) {
  const canvas = document.querySelector("#workflowCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0)";
  ctx.fillRect(0, 0, w, h);

  const cards = [
    { x: 90, y: 118, w: 132, h: 112, title: "输入问题", text: plan.flow[0] },
    { x: 280, y: 92, w: 150, h: 128, title: "配置产品", text: plan.flow[1] },
    { x: 488, y: 72, w: 138, h: 170, title: "得到结果", text: plan.flow[2] }
  ];

  ctx.strokeStyle = "#3B3F48";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(222, 174);
  ctx.bezierCurveTo(246, 174, 252, 156, 280, 156);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(430, 156);
  ctx.bezierCurveTo(452, 156, 460, 154, 488, 154);
  ctx.stroke();
  ctx.setLineDash([]);

  cards.forEach((card, index) => {
    const gradient = ctx.createLinearGradient(card.x, card.y, card.x, card.y + card.h);
    gradient.addColorStop(0, index === 2 ? "#FFFFFF" : "rgba(255,255,255,0.84)");
    gradient.addColorStop(1, index === 2 ? "#F8FBFF" : "rgba(255,255,255,0.68)");
    roundRect(ctx, card.x, card.y, card.w, card.h, 20, gradient, index === 2 ? "#7EA7FF" : "#D7E3F4", index === 2 ? 3 : 1);

    ctx.fillStyle = "#17181D";
    ctx.font = "700 16px Noto Sans SC, sans-serif";
    ctx.fillText(card.title, card.x + 18, card.y + 30);

    ctx.fillStyle = "#667085";
    ctx.font = "500 13px Noto Sans SC, sans-serif";
    wrapLines(ctx, card.text, card.x + 18, card.y + 58, card.w - 36, 22);
  });

  [252, 458].forEach((x) => {
    ctx.beginPath();
    ctx.fillStyle = "#5F8EF7";
    ctx.arc(x, 156, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 14px Manrope, sans-serif";
    ctx.fillText("→", x - 5, 161);
  });
}

function roundRect(ctx, x, y, w, h, r, fill, stroke, lineWidth) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function wrapLines(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  const chars = Array.from(text);
  chars.forEach((char, index) => {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = next;
    }
    if (index === chars.length - 1 && line) {
      ctx.fillText(line, x, y);
    }
  });
}

function bindEvents() {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => setPlan(card.dataset.plan));
  });

  document.querySelector("#planSelect").addEventListener("change", (event) => {
    setPlan(event.target.value);
  });

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelector(".lead-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector("button");
    button.innerHTML = '已提交 <i data-lucide="check"></i>';
    if (window.lucide) window.lucide.createIcons();
    window.setTimeout(() => {
      button.innerHTML = '提交咨询 <i data-lucide="send"></i>';
      if (window.lucide) window.lucide.createIcons();
    }, 1400);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  syncDeviceMode();
  bindEvents();
  setPlan(activePlan);
  if (window.lucide) window.lucide.createIcons();
});

window.addEventListener("resize", () => {
  syncDeviceMode();
  setPlan(activePlan);
});
