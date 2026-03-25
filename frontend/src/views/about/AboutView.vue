<template>
  <div class="container about-page">
    <section class="about-hero page-card">
      <div>
        <div class="pill">About Happy Hands</div>
        <h1>关于我们</h1>
        <p>聚焦医院与牙科机构采购场景，强调专业、稳定、可持续供货与高效率服务体验。</p>
      </div>
      <div class="about-side">
        <div><strong>服务方向</strong><span>医疗 / 牙科 / 卫材</span></div>
        <div><strong>模式</strong><span>B2B 机构采购</span></div>
      </div>
    </section>

    <section class="grid grid-2 about-grid">
      <article class="page-card">
        <h2 class="section-title">企业定位</h2>
        <p class="section-subtitle">当前页面用于承载公司介绍、品牌故事、服务优势、资质说明与发展历程。</p>
        <ul class="about-list">
          <li>为医疗与牙科机构提供稳定的物资目录</li>
          <li>以标准化商品展示提升采购效率</li>
          <li>支持从展示站逐步升级为运营化商城</li>
        </ul>
      </article>

      <article class="page-card">
        <h2 class="section-title">服务优势</h2>
        <div class="advantage-list">
          <div>
            <strong>01 专业品类组织</strong>
            <span>按机构采购逻辑构建分类与检索体验。</span>
          </div>
          <div>
            <strong>02 询盘转化优先</strong>
            <span>突出电话、表单、企业咨询入口。</span>
          </div>
          <div>
            <strong>03 可持续扩展</strong>
            <span>平滑接入后台管理、库存、订单与支付。</span>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 28px;
}

.about-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.about-hero h1 {
  margin: 16px 0 12px;
  font-size: 40px;
  color: #14314f;
}

.about-hero p {
  margin: 0;
  color: #647b90;
  max-width: 720px;
}

.about-side {
  min-width: 240px;
  display: grid;
  gap: 14px;
}

.about-side div {
  padding: 18px;
  border-radius: 18px;
  background: #edf7ff;
}

.about-side strong {
  display: block;
  color: #0b5cab;
}

.about-side span {
  display: block;
  margin-top: 8px;
  color: #173653;
  font-weight: 700;
}

.about-grid {
  margin-top: 24px;
}

.about-list {
  margin: 18px 0 0;
  padding-left: 20px;
  color: #5f768c;
  display: grid;
  gap: 12px;
}

.advantage-list {
  display: grid;
  gap: 16px;
}

.advantage-list div {
  padding: 18px;
  border-radius: 16px;
  background: #f4faff;
}

.advantage-list strong {
  display: block;
  margin-bottom: 8px;
  color: #173653;
}

.advantage-list span {
  color: #5f768c;
}

@media (max-width: 768px) {
  .about-hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .about-hero h1 {
    font-size: 30px;
  }

  .about-side {
    width: 100%;
    min-width: auto;
  }
}
</style>
