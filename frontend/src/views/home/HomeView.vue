<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="pill">B2B 医疗 / 牙科耗材站点复刻中</div>
          <h1>面向医院与牙科机构的专业卫材采购门户</h1>
          <p>
            以企业官网 + 商品目录 + 询价咨询为核心，优先完成高还原展示能力，后续平滑扩展为完整商城。
          </p>
          <div class="hero-actions">
            <RouterLink to="/products"><button class="btn-primary">查看商品中心</button></RouterLink>
            <RouterLink to="/contact"><button class="btn-secondary">联系销售顾问</button></RouterLink>
          </div>
          <div class="hero-data grid grid-3">
            <div class="metric-card">
              <strong>200+</strong>
              <span>预留商品品类</span>
            </div>
            <div class="metric-card">
              <strong>24h</strong>
              <span>询盘响应机制</span>
            </div>
            <div class="metric-card">
              <strong>B2B</strong>
              <span>面向机构采购</span>
            </div>
          </div>
        </div>

        <div class="hero-visual page-card">
          <div class="visual-panel">
            <div class="visual-badge">Professional Supply</div>
            <h3>高洁净 · 高效率 · 可持续运营</h3>
            <ul>
              <li>商品分类清晰，支持快速检索</li>
              <li>支持品牌展示、新闻公告、留资询盘</li>
              <li>后续可扩展库存、订单、支付能力</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-head">
        <h2 class="section-title">核心业务模块</h2>
        <p class="section-subtitle">先把站点主干做稳，再逐步加深交易能力。</p>
      </div>
      <div class="grid grid-4">
        <article class="page-card feature-card" v-for="item in features" :key="item.title">
          <div class="feature-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-head">
        <h2 class="section-title">重点商品分类</h2>
        <p class="section-subtitle">按牙科/医院采购逻辑组织，便于后续直接接后端数据。</p>
      </div>
      <div class="grid grid-4">
        <article class="page-card category-card" v-for="item in categories" :key="item.title">
          <div class="category-tag">{{ item.tag }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="container section-block">
      <div class="grid grid-2">
        <div class="page-card">
          <h2 class="section-title">开发路线</h2>
          <ul class="timeline">
            <li>第一阶段：首页、商品列表、商品详情高保真落地</li>
            <li>第二阶段：后端商品/分类/资讯接口接入</li>
            <li>第三阶段：后台管理、询价流、部署上线</li>
          </ul>
        </div>
        <div class="page-card inquiry-card">
          <h2 class="section-title">企业采购咨询</h2>
          <p class="section-subtitle">支持机构批量采购、长期供货、定制产品组合。</p>
          <div class="contact-box">
            <strong>热线电话</strong>
            <span>087-870-7335</span>
          </div>
          <RouterLink to="/contact"><button class="btn-primary full-width">立即咨询</button></RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  { icon: '01', title: '企业官网展示', desc: '承载品牌、资质、服务优势和核心介绍页面。' },
  { icon: '02', title: '商品目录系统', desc: '支持分类、筛选、详情、推荐和后续搜索扩展。' },
  { icon: '03', title: '询价留资能力', desc: '适合 B2B 采购场景，强调咨询转化。' },
  { icon: '04', title: '后台可运营化', desc: 'Banner、资讯、商品、分类都可逐步配置化。' }
]

const categories = [
  { tag: 'Dental', title: '牙科基础耗材', desc: '口腔治疗、检查、清洁相关常用耗材。' },
  { tag: 'Surgery', title: '灭菌与防护用品', desc: '手套、口罩、隔离、防护与消毒用品。' },
  { tag: 'Clinic', title: '门诊器械配套', desc: '诊疗周边器材及机构常规配套物料。' },
  { tag: 'Care', title: '护理与卫生物资', desc: '护理用品、清洁用品及后勤卫生物资。' }
]
</script>

<style scoped>
.hero-section {
  padding: 28px 0 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: stretch;
}

.hero-copy {
  padding: 28px 0;
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: 48px;
  line-height: 1.15;
  color: #14314f;
}

.hero-copy p {
  margin: 0;
  max-width: 680px;
  color: #5f768c;
  font-size: 17px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
}

.hero-data {
  margin-top: 28px;
}

.metric-card {
  background: #ffffff;
  border: 1px solid #e2ecf4;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 10px 24px rgba(19, 49, 79, 0.04);
}

.metric-card strong {
  display: block;
  font-size: 32px;
  color: #0b5cab;
}

.metric-card span {
  color: #6a8096;
}

.hero-visual {
  display: flex;
  align-items: stretch;
  min-height: 100%;
  background: linear-gradient(180deg, #ffffff, #eef8ff);
}

.visual-panel {
  width: 100%;
  border-radius: 16px;
  background: radial-gradient(circle at top right, #88d7df 0%, #0b5cab 70%);
  color: #fff;
  padding: 28px;
}

.visual-badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  margin-bottom: 16px;
}

.visual-panel h3 {
  margin: 0 0 18px;
  font-size: 30px;
}

.visual-panel ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 12px;
}

.section-block {
  padding-top: 56px;
}

.section-head {
  margin-bottom: 22px;
}

.feature-card,
.category-card {
  min-height: 220px;
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #e8f4ff, #d4eff7);
  color: #0b5cab;
  font-weight: 800;
  margin-bottom: 18px;
}

.feature-card h3,
.category-card h3 {
  margin: 0 0 12px;
  color: #173653;
}

.feature-card p,
.category-card p {
  margin: 0;
  color: #6b7f92;
}

.category-tag {
  display: inline-block;
  margin-bottom: 18px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #edf7ff;
  color: #0b5cab;
  font-size: 13px;
  font-weight: 700;
}

.timeline {
  margin: 0;
  padding-left: 20px;
  color: #5f768c;
  display: grid;
  gap: 12px;
}

.inquiry-card {
  background: linear-gradient(180deg, #f5fbff, #ffffff);
}

.contact-box {
  margin: 18px 0 22px;
  padding: 18px 20px;
  border-radius: 16px;
  background: #ebf6ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-box span {
  font-size: 28px;
  font-weight: 800;
  color: #0b5cab;
}

.full-width {
  width: 100%;
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero-copy h1 {
    font-size: 30px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .contact-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .contact-box span {
    font-size: 22px;
  }
}
</style>
