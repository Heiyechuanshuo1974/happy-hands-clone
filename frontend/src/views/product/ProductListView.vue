<template>
  <div class="container product-page">
    <section class="list-hero page-card">
      <div>
        <div class="pill">Product Catalog</div>
        <h1>商品中心</h1>
        <p>按机构采购逻辑提供分类、筛选与重点商品展示。当前为前端静态版，下一步接后端真实数据。</p>
      </div>
      <div class="hero-side">
        <div><strong>分类</strong><span>4 大类</span></div>
        <div><strong>商品</strong><span>12 个演示条目</span></div>
      </div>
    </section>

    <section class="filter-bar page-card">
      <div class="chips">
        <button
          v-for="item in filters"
          :key="item"
          :class="['chip', { active: activeFilter === item }]"
          @click="activeFilter = item"
        >
          {{ item }}
        </button>
      </div>
    </section>

    <section class="product-grid">
      <article class="product-card page-card" v-for="item in filteredProducts" :key="item.id">
        <div class="product-image">{{ item.tag }}</div>
        <div class="product-meta">
          <div class="product-category">{{ item.category }}</div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.desc }}</p>
        </div>
        <div class="product-bottom">
          <div class="product-status">支持咨询 / 询价</div>
          <RouterLink :to="`/products/${item.id}`"><button class="btn-secondary">查看详情</button></RouterLink>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const filters = ['全部', '牙科基础耗材', '灭菌与防护用品', '门诊器械配套', '护理与卫生物资']
const activeFilter = ref('全部')

const products = [
  { id: 1, tag: 'A01', category: '牙科基础耗材', name: '检查垫与基础耗材组合', desc: '适用于诊疗室日常消耗场景，便于批量采购。' },
  { id: 2, tag: 'A02', category: '牙科基础耗材', name: '口腔治疗辅助用品', desc: '面向日常牙科门诊治疗的辅助类物料。' },
  { id: 3, tag: 'B01', category: '灭菌与防护用品', name: '医用灭菌包装物料', desc: '适合机构标准化灭菌流程的基础包装耗材。' },
  { id: 4, tag: 'B02', category: '灭菌与防护用品', name: '诊疗防护消耗品', desc: '强调洁净、防护与更换效率。' },
  { id: 5, tag: 'C01', category: '门诊器械配套', name: '门诊通用器械配件', desc: '用于门诊与诊疗工位的周边器材配套。' },
  { id: 6, tag: 'C02', category: '门诊器械配套', name: '设备辅助连接耗材', desc: '方便后续按型号和规格扩展 SKU。' },
  { id: 7, tag: 'D01', category: '护理与卫生物资', name: '护理清洁组合包', desc: '适用于医院、诊所、护理场景的卫生物资。' },
  { id: 8, tag: 'D02', category: '护理与卫生物资', name: '机构清洁消毒用品', desc: '适配日常环境清洁与高频消毒场景。' },
  { id: 9, tag: 'A03', category: '牙科基础耗材', name: '牙科常规治疗耗材', desc: '适合建立长期采购目录。' },
  { id: 10, tag: 'B03', category: '灭菌与防护用品', name: '一次性防护用品', desc: '支持高频使用和批量供货。' },
  { id: 11, tag: 'C03', category: '门诊器械配套', name: '诊台周边配套件', desc: '适合门诊设备配套与运维替换。' },
  { id: 12, tag: 'D03', category: '护理与卫生物资', name: '后勤卫生补给用品', desc: '面向机构后勤管理与日常补给。' }
]

const filteredProducts = computed(() => {
  if (activeFilter.value === '全部') return products
  return products.filter(item => item.category === activeFilter.value)
})
</script>

<style scoped>
.product-page {
  padding-top: 28px;
}

.list-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.list-hero h1 {
  margin: 16px 0 12px;
  font-size: 40px;
  color: #14314f;
}

.list-hero p {
  margin: 0;
  color: #647b90;
  max-width: 720px;
}

.hero-side {
  min-width: 220px;
  display: grid;
  gap: 14px;
}

.hero-side div {
  background: #eff8ff;
  border-radius: 16px;
  padding: 16px 18px;
}

.hero-side strong {
  display: block;
  color: #0b5cab;
}

.hero-side span {
  display: block;
  margin-top: 6px;
  font-size: 20px;
  font-weight: 800;
}

.filter-bar {
  margin-top: 22px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip {
  border: 1px solid #d4e5f2;
  background: #fff;
  color: #31506a;
  padding: 10px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

.chip.active {
  background: #0b5cab;
  border-color: #0b5cab;
  color: #fff;
}

.product-grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.product-image {
  height: 180px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #e7f3ff, #d9f0f5);
  color: #0b5cab;
  font-size: 34px;
  font-weight: 800;
}

.product-category {
  color: #0b5cab;
  font-size: 13px;
  font-weight: 700;
}

.product-meta h3 {
  margin: 8px 0 10px;
  color: #173653;
}

.product-meta p {
  margin: 0;
  color: #688095;
}

.product-bottom {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.product-status {
  color: #4f7995;
  font-size: 14px;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .list-hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .list-hero h1 {
    font-size: 30px;
  }

  .hero-side {
    width: 100%;
    min-width: auto;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-bottom {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
