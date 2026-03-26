<template>
  <div class="product-list-page">
    <section class="breadcrumb-bar">
      <div class="container breadcrumb-inner">
        <span>ホーム</span>
        <span>›</span>
        <span>商品カテゴリ</span>
        <span>›</span>
        <strong>グローブ</strong>
      </div>
    </section>

    <section class="container category-hero">
      <div class="category-hero-main">
        <small>PRODUCT CATEGORY</small>
        <h1>グローブ</h1>
        <p>
          ラテックス・ニトリル・PVCなど、現場用途に合わせて選べるディスポーザブルグローブを一覧で掲載しています。
          サイズ・素材・カラー・用途で絞り込みながら商品を比較できます。
        </p>
      </div>
      <div class="category-hero-side">
        <div>
          <strong>{{ filteredProducts.length }}</strong>
          <span>表示商品数</span>
        </div>
        <div>
          <strong>8,000円以上</strong>
          <span>送料無料</span>
        </div>
      </div>
    </section>

    <section class="container category-layout">
      <aside class="filter-panel">
        <div class="filter-card">
          <div class="filter-card-head">
            <h2>絞り込み</h2>
            <button @click="resetFilters">クリア</button>
          </div>

          <div class="filter-group">
            <h3>素材</h3>
            <label v-for="material in materials" :key="material" class="check-row">
              <input type="radio" name="material" :value="material" v-model="selectedMaterial" />
              <span>{{ material }}</span>
            </label>
          </div>

          <div class="filter-group">
            <h3>カラー</h3>
            <label v-for="color in colors" :key="color" class="check-row">
              <input type="radio" name="color" :value="color" v-model="selectedColor" />
              <span>{{ color }}</span>
            </label>
          </div>

          <div class="filter-group">
            <h3>サイズ</h3>
            <div class="size-grid">
              <button
                v-for="size in sizes"
                :key="size"
                type="button"
                class="size-chip"
                :class="{ active: selectedSize === size }"
                @click="toggleSize(size)"
              >
                {{ size }}
              </button>
            </div>
          </div>
        </div>

        <div class="filter-card category-links">
          <h2>人気カテゴリ</h2>
          <a href="javascript:void(0)">ニトリルグローブ</a>
          <a href="javascript:void(0)">ラテックスグローブ</a>
          <a href="javascript:void(0)">ブラックグローブ</a>
          <a href="javascript:void(0)">ロングタイプ</a>
          <a href="javascript:void(0)">パウダーフリー</a>
        </div>
      </aside>

      <div class="product-content">
        <div class="toolbar-card">
          <div class="toolbar-left">
            <strong>{{ filteredProducts.length }}件の商品</strong>
            <span>条件に一致する商品を表示しています</span>
          </div>

          <div class="toolbar-right">
            <div class="view-tabs">
              <button class="view-tab active">3列</button>
              <button class="view-tab">4列</button>
            </div>
            <select v-model="sortBy">
              <option value="popular">おすすめ順</option>
              <option value="priceAsc">価格が安い順</option>
              <option value="priceDesc">価格が高い順</option>
              <option value="newest">新着順</option>
            </select>
          </div>
        </div>

        <div class="active-filters" v-if="hasActiveFilters">
          <span class="active-filter" v-if="selectedMaterial !== 'すべて'">素材: {{ selectedMaterial }}</span>
          <span class="active-filter" v-if="selectedColor !== 'すべて'">カラー: {{ selectedColor }}</span>
          <span class="active-filter" v-if="selectedSize">サイズ: {{ selectedSize }}</span>
        </div>

        <section class="product-grid">
          <article class="product-card" v-for="item in sortedProducts" :key="item.id">
            <div class="product-badges">
              <span class="badge pink" v-if="item.isSale">SALE</span>
              <span class="badge blue" v-if="item.isPopular">人気</span>
            </div>

            <div class="product-image-wrap">
              <div class="product-image-bg" :class="item.theme">
                <div class="product-pack-top"></div>
                <div class="product-pack-front">{{ item.code }}</div>
              </div>
            </div>

            <div class="product-info">
              <div class="product-subline">
                <span>{{ item.material }}</span>
                <span>{{ item.color }}</span>
              </div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>

              <div class="spec-tags">
                <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>

              <div class="price-box">
                <div class="unit-price">1枚/{{ item.unitPrice }}円</div>
                <div class="main-price">
                  <strong>¥{{ item.price }}</strong>
                  <span>税込</span>
                </div>
              </div>
            </div>

            <div class="product-actions">
              <RouterLink :to="`/products/${item.id}`" class="ghost-link">詳細を見る</RouterLink>
              <button class="add-cart-btn">カートに入れる</button>
            </div>
          </article>
        </section>

        <div class="pagination-card">
          <button class="page-btn">‹</button>
          <button class="page-number active">1</button>
          <button class="page-number">2</button>
          <button class="page-number">3</button>
          <button class="page-btn">›</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const materials = ['すべて', 'ニトリル', 'ラテックス', 'PVC']
const colors = ['すべて', 'ブルー', 'ホワイト', 'ブラック', 'ピンク']
const sizes = ['SS', 'S', 'M', 'L']

const selectedMaterial = ref('すべて')
const selectedColor = ref('すべて')
const selectedSize = ref('')
const sortBy = ref('popular')

const products = [
  {
    id: 1,
    code: 'N01',
    name: 'ニトリルグローブ ブルー パウダーフリー',
    desc: '医療・歯科・介護現場で使いやすい定番のニトリルグローブ。フィット感と耐久性のバランスに優れます。',
    material: 'ニトリル',
    color: 'ブルー',
    size: 'S',
    unitPrice: '4.48',
    price: '448',
    tags: ['100枚入', '左右兼用', 'パウダーフリー'],
    isSale: true,
    isPopular: true,
    theme: 'theme-blue'
  },
  {
    id: 2,
    code: 'N02',
    name: 'ニトリルグローブ ブラック サロン向け',
    desc: '美容・サロン用途で人気のブラックカラー。汚れが目立ちにくく、施術シーンにもなじみます。',
    material: 'ニトリル',
    color: 'ブラック',
    size: 'M',
    unitPrice: '5.20',
    price: '520',
    tags: ['100枚入', 'ブラック', '人気カラー'],
    isSale: false,
    isPopular: true,
    theme: 'theme-black'
  },
  {
    id: 3,
    code: 'L01',
    name: 'ラテックスグローブ ナチュラル',
    desc: '高い伸縮性とフィット感を重視したラテックスタイプ。細かな作業にも対応しやすいモデルです。',
    material: 'ラテックス',
    color: 'ホワイト',
    size: 'M',
    unitPrice: '4.98',
    price: '498',
    tags: ['100枚入', '極薄', '高伸縮'],
    isSale: false,
    isPopular: false,
    theme: 'theme-white'
  },
  {
    id: 4,
    code: 'P01',
    name: 'PVCグローブ クリア 家庭・軽作業向け',
    desc: '軽作業や簡易な衛生用途に使いやすいPVCタイプ。コスト重視のまとめ買い向けです。',
    material: 'PVC',
    color: 'ホワイト',
    size: 'L',
    unitPrice: '3.80',
    price: '380',
    tags: ['100枚入', 'コスパ重視', '軽作業向け'],
    isSale: true,
    isPopular: false,
    theme: 'theme-sky'
  },
  {
    id: 5,
    code: 'N03',
    name: 'ニトリルグローブ ピンク パステルカラー',
    desc: 'やわらかい印象のパステルピンク。クリニックや受付まわりでも使いやすいカラーです。',
    material: 'ニトリル',
    color: 'ピンク',
    size: 'SS',
    unitPrice: '4.90',
    price: '490',
    tags: ['100枚入', 'やわらかカラー', '人気色'],
    isSale: false,
    isPopular: true,
    theme: 'theme-pink'
  },
  {
    id: 6,
    code: 'N04',
    name: 'ニトリルロンググローブ ブルー',
    desc: '前腕側までしっかりカバーできるロングタイプ。飛沫・汚染対策を強めたいシーン向けです。',
    material: 'ニトリル',
    color: 'ブルー',
    size: 'L',
    unitPrice: '8.80',
    price: '880',
    tags: ['50枚入', 'ロングタイプ', '高防護'],
    isSale: false,
    isPopular: false,
    theme: 'theme-blue'
  },
  {
    id: 7,
    code: 'L02',
    name: 'ラテックスグローブ ホワイト ベーシック',
    desc: '標準的な厚みで日常使用しやすいラテックスモデル。コストと操作性のバランスを重視。',
    material: 'ラテックス',
    color: 'ホワイト',
    size: 'S',
    unitPrice: '4.60',
    price: '460',
    tags: ['100枚入', '定番品', 'バランス型'],
    isSale: false,
    isPopular: true,
    theme: 'theme-white'
  },
  {
    id: 8,
    code: 'P02',
    name: 'PVCグローブ ブルー 使い捨てタイプ',
    desc: '日常の補充用として導入しやすいPVCタイプ。備蓄用・消耗用としても扱いやすい仕様です。',
    material: 'PVC',
    color: 'ブルー',
    size: 'M',
    unitPrice: '3.95',
    price: '395',
    tags: ['100枚入', 'ブルー', '備蓄向け'],
    isSale: true,
    isPopular: false,
    theme: 'theme-sky'
  },
  {
    id: 9,
    code: 'N05',
    name: 'ニトリルグローブ ホワイト 高耐久タイプ',
    desc: '破れにくさを重視した高耐久ニトリル。作業量の多い現場でも安心して使いやすいモデルです。',
    material: 'ニトリル',
    color: 'ホワイト',
    size: 'M',
    unitPrice: '5.60',
    price: '560',
    tags: ['100枚入', '高耐久', '作業向け'],
    isSale: false,
    isPopular: true,
    theme: 'theme-white'
  }
]

const filteredProducts = computed(() => {
  return products.filter((item) => {
    const materialMatched = selectedMaterial.value === 'すべて' || item.material === selectedMaterial.value
    const colorMatched = selectedColor.value === 'すべて' || item.color === selectedColor.value
    const sizeMatched = !selectedSize.value || item.size === selectedSize.value
    return materialMatched && colorMatched && sizeMatched
  })
})

const sortedProducts = computed(() => {
  const list = [...filteredProducts.value]

  if (sortBy.value === 'priceAsc') {
    return list.sort((a, b) => Number(a.price) - Number(b.price))
  }

  if (sortBy.value === 'priceDesc') {
    return list.sort((a, b) => Number(b.price) - Number(a.price))
  }

  if (sortBy.value === 'newest') {
    return list.reverse()
  }

  return list.sort((a, b) => Number(b.isPopular) - Number(a.isPopular) || Number(b.isSale) - Number(a.isSale))
})

const hasActiveFilters = computed(() => {
  return selectedMaterial.value !== 'すべて' || selectedColor.value !== 'すべて' || !!selectedSize.value
})

const toggleSize = (size) => {
  selectedSize.value = selectedSize.value === size ? '' : size
}

const resetFilters = () => {
  selectedMaterial.value = 'すべて'
  selectedColor.value = 'すべて'
  selectedSize.value = ''
  sortBy.value = 'popular'
}
</script>

<style scoped>
.product-list-page {
  background: #f7fbfe;
  min-height: calc(100vh - 80px);
  padding-bottom: 60px;
}

.breadcrumb-bar {
  background: #fff;
  border-bottom: 1px solid #e6eef5;
}

.breadcrumb-inner {
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7a8ea0;
  font-size: 13px;
}

.breadcrumb-inner strong {
  color: #173653;
}

.category-hero {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 24px;
  align-items: stretch;
}

.category-hero-main,
.category-hero-side {
  background: #fff;
  border: 1px solid #e4edf4;
  border-radius: 24px;
  padding: 28px;
}

.category-hero-main small {
  color: #0b5cab;
  font-weight: 800;
  letter-spacing: 1px;
}

.category-hero-main h1 {
  margin: 10px 0 14px;
  font-size: 42px;
  color: #173653;
}

.category-hero-main p {
  margin: 0;
  color: #688095;
  line-height: 1.8;
  max-width: 820px;
}

.category-hero-side {
  display: grid;
  gap: 16px;
}

.category-hero-side div {
  border-radius: 18px;
  background: linear-gradient(135deg, #edf7ff, #f8fbff);
  padding: 20px;
}

.category-hero-side strong {
  display: block;
  color: #0b5cab;
  font-size: 28px;
}

.category-hero-side span {
  display: block;
  margin-top: 8px;
  color: #5f778d;
  font-size: 14px;
}

.category-layout {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  align-items: start;
}

.filter-panel {
  display: grid;
  gap: 18px;
  position: sticky;
  top: 24px;
}

.filter-card,
.toolbar-card,
.pagination-card {
  background: #fff;
  border: 1px solid #e4edf4;
  border-radius: 24px;
}

.filter-card {
  padding: 22px;
}

.filter-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
}

.filter-card-head h2,
.category-links h2 {
  margin: 0;
  font-size: 20px;
  color: #173653;
}

.filter-card-head button {
  border: none;
  background: #eef6fd;
  color: #0b5cab;
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 700;
}

.filter-group + .filter-group {
  margin-top: 22px;
  padding-top: 22px;
  border-top: 1px solid #edf3f8;
}

.filter-group h3 {
  margin: 0 0 14px;
  font-size: 15px;
  color: #173653;
}

.check-row {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #5f778d;
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
}

.size-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.size-chip {
  border: 1px solid #d8e6f1;
  background: #fff;
  color: #31506a;
  border-radius: 12px;
  padding: 10px 0;
  cursor: pointer;
  font-weight: 700;
}

.size-chip.active {
  border-color: #0b5cab;
  background: #0b5cab;
  color: #fff;
}

.category-links {
  display: grid;
  gap: 12px;
}

.category-links a {
  color: #4d657b;
  text-decoration: none;
}

.product-content {
  min-width: 0;
}

.toolbar-card {
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.toolbar-left strong {
  display: block;
  color: #173653;
  font-size: 20px;
}

.toolbar-left span {
  display: block;
  margin-top: 6px;
  color: #74889a;
  font-size: 14px;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.toolbar-right select {
  border: 1px solid #d9e7f1;
  border-radius: 12px;
  padding: 12px 14px;
  color: #31506a;
  background: #fff;
}

.view-tabs {
  display: flex;
  gap: 8px;
}

.view-tab {
  border: 1px solid #d8e6f1;
  background: #fff;
  color: #4e667b;
  border-radius: 12px;
  padding: 11px 14px;
  cursor: pointer;
}

.view-tab.active {
  background: #eff6fd;
  border-color: #0b5cab;
  color: #0b5cab;
  font-weight: 700;
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 18px 0 0;
}

.active-filter {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: #edf6ff;
  color: #0b5cab;
  font-size: 13px;
  font-weight: 700;
}

.product-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.product-card {
  background: #fff;
  border: 1px solid #e4edf4;
  border-radius: 24px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 12px 28px rgba(19, 49, 79, 0.04);
}

.product-badges {
  display: flex;
  gap: 8px;
  min-height: 28px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
}

.badge.pink {
  background: #ffeaf1;
  color: #d84c7f;
}

.badge.blue {
  background: #eaf4ff;
  color: #0b5cab;
}

.product-image-wrap {
  border-radius: 20px;
  overflow: hidden;
}

.product-image-bg {
  position: relative;
  height: 240px;
  display: grid;
  place-items: center;
}

.product-pack-top {
  position: absolute;
  top: 34px;
  width: 86px;
  height: 18px;
  border-radius: 999px;
  background: rgba(255,255,255,0.8);
}

.product-pack-front {
  width: 142px;
  height: 168px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  color: #0b5cab;
  font-size: 36px;
  font-weight: 800;
  background: rgba(255,255,255,0.88);
  box-shadow: 0 10px 20px rgba(18, 43, 70, 0.1);
}

.theme-blue {
  background: linear-gradient(180deg, #eff8ff, #cde8fb 72%, #a5d2f3);
}

.theme-black {
  background: linear-gradient(180deg, #f1f3f5, #d9e0e7 70%, #b5c1ce);
}

.theme-white {
  background: linear-gradient(180deg, #fffdfd, #f4f7fb 72%, #e2ecf5);
}

.theme-sky {
  background: linear-gradient(180deg, #f1fbff, #d7f0fb 72%, #b6e2f6);
}

.theme-pink {
  background: linear-gradient(180deg, #fff2f7, #ffdcea 72%, #fcbfd8);
}

.product-subline {
  display: flex;
  gap: 10px;
  color: #0b5cab;
  font-size: 13px;
  font-weight: 700;
}

.product-info h3 {
  margin: 10px 0 10px;
  color: #173653;
  font-size: 22px;
  line-height: 1.35;
}

.product-info p {
  margin: 0;
  color: #6a8093;
  line-height: 1.7;
  font-size: 14px;
}

.spec-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.spec-tags span {
  padding: 6px 10px;
  border-radius: 999px;
  background: #f2f6fa;
  color: #698196;
  font-size: 12px;
}

.price-box {
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.unit-price {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: #fff0f5;
  color: #d84c7f;
  font-size: 12px;
  font-weight: 800;
}

.main-price strong {
  font-size: 32px;
  color: #d84c7f;
}

.main-price span {
  margin-left: 6px;
  color: #7a8d9f;
  font-size: 12px;
}

.product-actions {
  margin-top: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
}

.ghost-link {
  color: #31506a;
  text-decoration: none;
  font-weight: 700;
}

.add-cart-btn {
  border: none;
  background: linear-gradient(180deg, #1766b5, #0b5cab);
  color: #fff;
  border-radius: 999px;
  padding: 12px 18px;
  cursor: pointer;
  font-weight: 800;
}

.pagination-card {
  margin-top: 22px;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.page-btn,
.page-number {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #d8e6f1;
  background: #fff;
  color: #4d657b;
  cursor: pointer;
}

.page-number.active {
  background: #0b5cab;
  border-color: #0b5cab;
  color: #fff;
  font-weight: 800;
}

@media (max-width: 1200px) {
  .category-layout {
    grid-template-columns: 1fr;
  }

  .filter-panel {
    position: static;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .category-hero {
    grid-template-columns: 1fr;
  }

  .toolbar-card {
    flex-direction: column;
    align-items: stretch;
  }

  .toolbar-right {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .category-hero-main h1 {
    font-size: 32px;
  }

  .size-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-actions {
    grid-template-columns: 1fr;
  }
}
</style>
