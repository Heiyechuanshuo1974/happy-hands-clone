<template>
  <div class="home-page">
    <section class="top-notice">
      <div class="container notice-inner">
        <span>【会員様へご案内】パスワード再設定のお願いと重要なお知らせ</span>
        <span class="notice-arrow">›</span>
      </div>
    </section>

    <section class="header-clone">
      <div class="container header-main">
        <div class="logo-block">
          <div class="logo-mark">H</div>
          <div class="logo-copy">
            <h1>HAPPY HANDS</h1>
            <p>8,000円(税込)以上のご購入で 送料無料</p>
          </div>
        </div>

        <div class="search-block">
          <input type="text" placeholder="商品名・商品番号・キーワードで検索" />
          <button>検索</button>
        </div>

        <div class="header-icons">
          <div class="icon-item">
            <div class="icon-circle">人</div>
            <span>マイページ</span>
          </div>
          <div class="icon-item">
            <div class="icon-circle">履</div>
            <span>購入履歴</span>
          </div>
          <div class="icon-item cart">
            <div class="icon-circle">カ</div>
            <span>カート</span>
          </div>
        </div>
      </div>

      <div class="container nav-tabs">
        <a href="javascript:void(0)">商品カテゴリ</a>
        <a href="javascript:void(0)">グローブ特集</a>
        <a href="javascript:void(0)">セール商品</a>
        <a href="javascript:void(0)">在庫処分</a>
      </div>
    </section>

    <section class="hero-wrap">
      <div class="container hero-stage">
        <button class="carousel-arrow left">‹</button>

        <div class="hero-card side fade-left">
          <div class="hero-bg mint">
            <div class="hero-kicker">FEATURE</div>
            <h3>Soft Apron</h3>
            <p>医療・介護・美容向けエプロン特集</p>
          </div>
        </div>

        <div class="hero-card main">
          <div class="hero-bg coral">
            <div class="hero-kicker">SPECIAL SALE</div>
            <h2>新生活応援セール</h2>
            <p>対象商品 最大 20% OFF / 期間限定</p>
          </div>
        </div>

        <div class="hero-card side fade-right">
          <div class="hero-bg blue">
            <div class="hero-kicker">GLOVE</div>
            <h3>Glove Collection</h3>
            <p>ニトリル・ラテックス・PVC を比較</p>
          </div>
        </div>

        <button class="carousel-arrow right">›</button>
      </div>

      <div class="container dots">
        <span></span>
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section class="shortcut-section">
      <div class="container shortcut-grid">
        <article class="shortcut-card" v-for="item in shortcuts" :key="item.title">
          <div class="shortcut-icon">{{ item.icon }}</div>
          <div class="shortcut-text">
            <strong>{{ item.title }}</strong>
            <span>{{ item.sub }}</span>
          </div>
          <div class="shortcut-arrow">›</div>
        </article>
      </div>
    </section>

    <section class="news-section container">
      <div class="news-head">
        <h2>新着情報</h2>
        <button>新着情報一覧はこちら</button>
      </div>

      <div class="news-list page-card">
        <article class="news-item" v-for="item in newsList" :key="item.title">
          <div class="news-date">{{ item.date }}</div>
          <div class="news-body">
            <span class="news-tag">[お知らせ]</span>
            <strong>{{ item.title }}</strong>
          </div>
          <div class="news-update">更新日: {{ item.update }}</div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const shortcuts = [
  { icon: '特', title: 'グローブ特集', sub: 'おすすめ特集' },
  { icon: '手', title: 'グローブ', sub: '定番商品一覧' },
  { icon: '口', title: 'マスク', sub: '感染予防用品' },
  { icon: '前', title: 'エプロン', sub: '防水・使い捨て' },
  { icon: '菌', title: '滅菌・感染予防', sub: '衛生対策用品' },
  { icon: '衛', title: 'インスツルメント・衛生材料', sub: '診療補助用品' },
  { icon: '美', title: 'ヘアーサロン & BODYアート', sub: '関連用品' },
  { icon: '日', title: '日用品 他', sub: '施設向け用品' },
  { icon: '処', title: '在庫処分', sub: 'お買い得商品' },
  { icon: 'セ', title: 'セール商品', sub: '期間限定価格' }
]

const newsList = [
  { date: '2026.03.13', title: 'システムメンテナンスに伴うサービス一時停止のお知らせ', update: '2026.03.13' },
  { date: '2026.03.03', title: '春のおすすめキャンペーン掲載開始のお知らせ', update: '2026.03.03' },
  { date: '2026.02.28', title: '一部商品の価格改定についてのご案内', update: '2026.02.28' },
  { date: '2026.02.14', title: '新規会員登録キャンペーンのお知らせ', update: '2026.02.14' }
]
</script>

<style scoped>
.home-page {
  background: #fff;
}

.top-notice {
  background: #0d4f90;
  color: #fff;
  font-size: 13px;
}

.notice-inner {
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.notice-arrow {
  font-size: 20px;
  line-height: 1;
}

.header-clone {
  border-bottom: 1px solid #dbe7f1;
  background: #fff;
}

.header-main {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 28px;
  align-items: center;
  padding: 26px 0 18px;
}

.logo-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-mark {
  width: 58px;
  height: 58px;
  border: 2px solid #0b5cab;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #0b5cab;
  font-weight: 800;
  font-size: 28px;
}

.logo-copy h1 {
  margin: 0;
  font-size: 34px;
  line-height: 1;
  letter-spacing: 1px;
  color: #154c7d;
}

.logo-copy p {
  margin: 8px 0 0;
  color: #6a7f92;
  font-size: 13px;
}

.search-block {
  display: flex;
  align-items: center;
  border: 1px solid #d8e5ef;
  border-radius: 999px;
  overflow: hidden;
  max-width: 540px;
  justify-self: center;
  width: 100%;
}

.search-block input {
  flex: 1;
  border: none;
  padding: 14px 18px;
  font: inherit;
  outline: none;
}

.search-block button {
  border: none;
  background: #0b5cab;
  color: #fff;
  padding: 14px 22px;
  cursor: pointer;
  font-weight: 700;
}

.header-icons {
  display: flex;
  gap: 18px;
}

.icon-item {
  display: grid;
  justify-items: center;
  gap: 8px;
  color: #4d657b;
  font-size: 12px;
}

.icon-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #cfdeea;
  display: grid;
  place-items: center;
  color: #0b5cab;
  background: #fff;
}

.cart .icon-circle {
  background: #fce8ef;
  border-color: #f6c7d7;
  color: #ce4d7b;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 14px 0 16px;
}

.nav-tabs a {
  color: #274764;
  text-decoration: none;
  font-weight: 600;
}

.hero-wrap {
  padding: 28px 0 24px;
  background: #fff;
}

.hero-stage {
  display: grid;
  grid-template-columns: auto 0.82fr 1.2fr 0.82fr auto;
  gap: 18px;
  align-items: center;
}

.hero-card {
  border-radius: 28px;
  overflow: hidden;
  height: 360px;
  box-shadow: 0 12px 32px rgba(19, 49, 79, 0.08);
}

.hero-card.side {
  transform: scale(0.96);
  opacity: 0.88;
}

.hero-bg {
  height: 100%;
  padding: 34px 28px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero-bg.coral {
  background: linear-gradient(135deg, #f4b3ae, #eb7279 70%);
}

.hero-bg.blue {
  background: linear-gradient(135deg, #5ec3e7, #1f6fb9 70%);
}

.hero-bg.mint {
  background: linear-gradient(135deg, #b8e5d2, #46b39d 70%);
}

.hero-kicker {
  font-size: 12px;
  letter-spacing: 1px;
  opacity: 0.9;
  margin-bottom: 10px;
}

.hero-card.main h2 {
  margin: 0 0 10px;
  font-size: 42px;
  line-height: 1.1;
}

.hero-card.side h3 {
  margin: 0 0 10px;
  font-size: 28px;
}

.hero-bg p {
  margin: 0;
  font-size: 16px;
}

.carousel-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #d9e7f1;
  background: #fff;
  color: #6b8093;
  font-size: 28px;
  cursor: pointer;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 18px;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d5e2ec;
}

.dots span.active {
  background: #0b5cab;
}

.shortcut-section {
  background: #edf5f9;
  padding: 34px 0 42px;
}

.shortcut-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.shortcut-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px 16px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: center;
  border: 1px solid #e2ebf2;
}

.shortcut-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #edf7ff;
  color: #0b5cab;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.shortcut-text strong {
  display: block;
  color: #173653;
  font-size: 15px;
}

.shortcut-text span {
  display: block;
  margin-top: 4px;
  color: #6b8195;
  font-size: 12px;
}

.shortcut-arrow {
  color: #8aa0b3;
  font-size: 20px;
}

.news-section {
  padding: 44px 0 64px;
}

.news-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.news-head h2 {
  margin: 0;
  font-size: 32px;
  color: #163450;
}

.news-head button {
  border: 1px solid #d2e1ec;
  background: #fff;
  color: #31506b;
  border-radius: 999px;
  padding: 12px 18px;
  cursor: pointer;
}

.news-list {
  padding: 0 24px;
}

.news-item {
  display: grid;
  grid-template-columns: 140px 1fr 170px;
  gap: 18px;
  align-items: center;
  padding: 22px 0;
  border-bottom: 1px solid #e6eef4;
}

.news-item:last-child {
  border-bottom: none;
}

.news-date,
.news-update {
  color: #73889a;
  font-size: 14px;
}

.news-body {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.news-tag {
  color: #0b5cab;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.news-body strong {
  color: #173653;
}

@media (max-width: 1100px) {
  .header-main {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .search-block {
    max-width: 100%;
  }

  .hero-stage {
    grid-template-columns: 1fr;
  }

  .hero-card.side {
    display: none;
  }

  .carousel-arrow {
    display: none;
  }

  .shortcut-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .news-item {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .notice-inner {
    padding: 6px 0;
    font-size: 12px;
  }

  .logo-copy h1 {
    font-size: 28px;
  }

  .header-icons {
    width: 100%;
    justify-content: center;
  }

  .nav-tabs {
    flex-wrap: wrap;
    gap: 20px;
  }

  .hero-card {
    height: 280px;
  }

  .hero-card.main h2 {
    font-size: 32px;
  }

  .shortcut-grid {
    grid-template-columns: 1fr;
  }

  .news-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
