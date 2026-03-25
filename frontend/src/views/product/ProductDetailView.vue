<template>
  <div class="container detail-page">
    <section class="detail-top page-card">
      <div class="detail-gallery">
        <div class="main-image">{{ product.code }}</div>
        <div class="thumb-row">
          <div class="thumb" v-for="item in 4" :key="item">{{ item }}</div>
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-category">{{ product.category }}</div>
        <h1>{{ product.name }}</h1>
        <p class="detail-summary">{{ product.summary }}</p>

        <div class="detail-tags">
          <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
        </div>

        <div class="spec-card">
          <div class="spec-row" v-for="spec in specs" :key="spec.label">
            <span>{{ spec.label }}</span>
            <strong>{{ spec.value }}</strong>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn-primary">立即询价</button>
          <button class="btn-secondary">联系销售</button>
        </div>
      </div>
    </section>

    <section class="detail-bottom grid grid-2">
      <article class="page-card">
        <h2 class="section-title">商品说明</h2>
        <p class="section-subtitle">{{ product.description }}</p>
        <ul class="desc-list">
          <li>适配牙科 / 医疗机构的高频采购场景</li>
          <li>支持按型号、规格、包装单位进行 SKU 拓展</li>
          <li>支持后续接入库存、价格梯度和采购起订量</li>
        </ul>
      </article>

      <article class="page-card">
        <h2 class="section-title">采购与交付说明</h2>
        <div class="service-box">
          <div>
            <strong>支持方式</strong>
            <span>电话咨询 / 表单询价 / 后续在线下单</span>
          </div>
          <div>
            <strong>交付模式</strong>
            <span>机构批量配送 / 常规补货 / 长期供货</span>
          </div>
          <div>
            <strong>售前服务</strong>
            <span>型号确认、需求梳理、产品组合建议</span>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
const product = {
  code: 'A01',
  category: '牙科基础耗材',
  name: '检查垫与基础耗材组合',
  summary: '面向牙科门诊与医疗机构的高频消耗品采购场景，支持标准化目录管理与后续批量询价。',
  description: '当前为商品详情页高保真草案。后续会接入真实商品图、SKU 规格、参数表、详情介绍、相关推荐以及询价接口。',
  tags: ['机构采购', '支持询价', '可拓展 SKU', '高频消耗品']
}

const specs = [
  { label: '适用场景', value: '牙科门诊 / 医疗机构' },
  { label: '采购模式', value: '批量采购 / 周期补货' },
  { label: '商品状态', value: '演示数据' },
  { label: '后续能力', value: '库存 / 价格 / SKU 扩展' }
]
</script>

<style scoped>
.detail-page {
  padding-top: 28px;
}

.detail-top {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 28px;
}

.detail-gallery {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.main-image {
  min-height: 420px;
  border-radius: 20px;
  background: linear-gradient(135deg, #e7f4ff, #d8eff5);
  display: grid;
  place-items: center;
  font-size: 72px;
  font-weight: 800;
  color: #0b5cab;
}

.thumb-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.thumb {
  height: 88px;
  border-radius: 16px;
  background: #eff7fd;
  display: grid;
  place-items: center;
  color: #6990ad;
  font-weight: 700;
}

.detail-category {
  display: inline-block;
  margin-bottom: 14px;
  padding: 8px 14px;
  background: #edf7ff;
  color: #0b5cab;
  border-radius: 999px;
  font-weight: 700;
}

.detail-info h1 {
  margin: 0 0 16px;
  font-size: 40px;
  line-height: 1.2;
  color: #14314f;
}

.detail-summary {
  margin: 0;
  color: #678095;
  font-size: 16px;
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 22px 0;
}

.detail-tags span {
  padding: 9px 14px;
  border-radius: 999px;
  background: #f1f8ff;
  color: #0b5cab;
  font-size: 13px;
  font-weight: 700;
}

.spec-card {
  border: 1px solid #e2edf5;
  border-radius: 18px;
  overflow: hidden;
  background: #fbfdff;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 18px;
  border-bottom: 1px solid #e8f0f6;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-row span {
  color: #6a8195;
}

.spec-row strong {
  color: #173653;
  text-align: right;
}

.detail-actions {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.detail-bottom {
  margin-top: 24px;
}

.desc-list {
  margin: 18px 0 0;
  padding-left: 20px;
  color: #5f768c;
  display: grid;
  gap: 12px;
}

.service-box {
  display: grid;
  gap: 16px;
}

.service-box div {
  padding: 18px;
  border-radius: 16px;
  background: #f4faff;
}

.service-box strong {
  display: block;
  margin-bottom: 8px;
  color: #0b5cab;
}

.service-box span {
  color: #5f768c;
}

@media (max-width: 960px) {
  .detail-top {
    grid-template-columns: 1fr;
  }

  .detail-info h1 {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .main-image {
    min-height: 280px;
    font-size: 48px;
  }

  .thumb-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .detail-actions {
    flex-direction: column;
  }

  .spec-row {
    flex-direction: column;
  }
}
</style>
