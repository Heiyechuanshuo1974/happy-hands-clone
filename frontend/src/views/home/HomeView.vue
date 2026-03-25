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
            <p>医療・歯科衛生用品オンラインショップ</p>
            <small>8,000円(税込)以上のご購入で 送料無料</small>
          </div>
        </div>

        <div class="search-area">
          <div class="search-keywords">
            <span>人気検索</span>
            <a href="javascript:void(0)">グローブ</a>
            <a href="javascript:void(0)">マスク</a>
            <a href="javascript:void(0)">エプロン</a>
          </div>
          <div class="search-block">
            <input type="text" placeholder="商品名・商品番号・キーワードで検索" />
            <button>検索</button>
          </div>
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
        <a href="javascript:void(0)" class="active">商品カテゴリ</a>
        <a href="javascript:void(0)">グローブ特集</a>
        <a href="javascript:void(0)">セール商品</a>
        <a href="javascript:void(0)">在庫処分</a>
      </div>
    </section>

    <section class="hero-wrap">
      <div class="container hero-stage">
        <button class="carousel-arrow left">‹</button>

        <div class="hero-card side fade-left">
          <div class="hero-bg mint apron-bg">
            <div class="poster-tag">FEATURE</div>
            <div class="poster-copy">
              <small>for clinic & care</small>
              <h3>エプロン</h3>
              <p>使い捨て・防水・衛生管理向け</p>
            </div>
          </div>
        </div>

        <div class="hero-card main">
          <div class="hero-bg coral spring-bg">
            <div class="poster-tag sale">SPECIAL SALE</div>
            <div class="poster-copy main-copy">
              <small>Happy Hands Campaign</small>
              <h2>新生活応援セール</h2>
              <p>対象商品 最大20%OFF / 医療・歯科用品をお得にまとめ買い</p>
            </div>
          </div>
        </div>

        <div class="hero-card side fade-right">
          <div class="hero-bg blue glove-bg">
            <div class="poster-tag">GLOVE</div>
            <div class="poster-copy">
              <small>comparison guide</small>
              <h3>グローブ特集</h3>
              <p>ニトリル・ラテックス・PVC を比較</p>
            </div>
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

      <div class="news-list page-card slim-card">
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

    <section class="sale-section container">
      <div class="section-head-line">
        <h2>セール商品</h2>
        <button>もっと見る</button>
      </div>

      <div class="sale-grid">
        <article class="sale-card" v-for="item in saleProducts" :key="item.name">
          <div class="unit-price">1枚/{{ item.unitPrice }}円</div>
          <div class="sale-image">
            <div class="pack-top"></div>
            <div class="pack-body">{{ item.code }}</div>
          </div>
          <div class="spec-tags">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
          <h3>{{ item.name }}</h3>
          <div class="price-row">
            <span class="sale-badge">SALE</span>
            <div class="price-group">
              <strong>¥{{ item.salePrice }}</strong>
              <span>税込</span>
            </div>
          </div>
          <div class="origin-price">¥{{ item.originPrice }}</div>
        </article>
      </div>
    </section>

    <section class="helpful-section container">
      <div class="section-head-line info-gap">
        <h2>安心・お得なお役立ち情報</h2>
      </div>

      <div class="helpful-grid">
        <article class="helpful-card" v-for="item in helpfulBanners" :key="item.title" :class="item.theme">
          <div class="helpful-copy">
            <small>{{ item.kicker }}</small>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <button>詳しくはこちら</button>
          </div>
          <div class="helpful-figure">{{ item.figure }}</div>
        </article>
      </div>
    </section>

    <section class="catalog-section container">
      <div class="catalog-banner">
        <div class="catalog-free">
          <span>FREE</span>
          <strong>無料</strong>
        </div>
        <div class="catalog-copy">
          <small>CATALOG REQUEST</small>
          <h2>最新のカタログはこちらからご請求ください</h2>
          <p>注目商品・定番商品をまとめたカタログをご用意しています。</p>
        </div>
        <div class="catalog-side">
          <div class="catalog-book">CATALOG</div>
          <button>カタログのご請求</button>
        </div>
      </div>
    </section>

    <section class="recent-section container">
      <div class="section-head-line info-gap">
        <h2>最近見た商品</h2>
      </div>
      <div class="recent-box page-card slim-card">
        <p>最近見た商品がありません</p>
        <button>履歴を残さない</button>
      </div>
    </section>

    <section class="footer-clone">
      <div class="container footer-clone-grid">
        <div class="calendar-card">
          <h3>営業日カレンダー</h3>
          <div class="calendar-box">
            <div class="calendar-header">2026年 3月</div>
            <div class="calendar-week">
              <span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span>土</span><span>日</span>
            </div>
            <div class="calendar-days">
              <span v-for="day in 31" :key="day" :class="{ holiday: day % 7 === 0 || day % 6 === 0 }">{{ day }}</span>
            </div>
          </div>
        </div>

        <div class="footer-center">
          <div class="footer-brand">
            <div class="footer-brand-mark">H</div>
            <div>
              <strong>HAPPY HANDS</strong>
              <p>医療・歯科衛生用品オンラインショップ</p>
            </div>
          </div>

          <div class="social-row">
            <span>LINE</span>
            <span>Instagram</span>
          </div>

          <div class="footer-links">
            <a href="javascript:void(0)">ご利用ガイド</a>
            <a href="javascript:void(0)">プライバシーポリシー</a>
            <a href="javascript:void(0)">よくあるご質問</a>
            <a href="javascript:void(0)">特定商取引法に基づく表記</a>
            <a href="javascript:void(0)">お問い合わせ</a>
            <a href="javascript:void(0)">利用規約</a>
            <a href="javascript:void(0)">会社概要</a>
            <a href="javascript:void(0)">ブログ</a>
          </div>
        </div>

        <div class="footer-contact-card">
          <div class="contact-panel">
            <small>お電話でのご注文</small>
            <strong>087-870-7335</strong>
            <p>受付時間 : 9:00 ～ 18:00 [平日]</p>
          </div>
          <div class="contact-panel fax">
            <small>FAXでのご注文</small>
            <strong>0120-997-002</strong>
            <p>24時間受付</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const shortcuts = [
  { icon: '特', title: 'グローブ特集' },
  { icon: '手', title: 'グローブ' },
  { icon: '口', title: 'マスク' },
  { icon: '前', title: 'エプロン' },
  { icon: '菌', title: '滅菌・感染予防' },
  { icon: '衛', title: 'インスツルメント・衛生材料' },
  { icon: '美', title: 'ヘアーサロン & BODYアート' },
  { icon: '日', title: '日用品 他' },
  { icon: '処', title: '在庫処分' },
  { icon: 'セ', title: 'セール商品' }
]

const newsList = [
  { date: '2026.03.13', title: 'システムメンテナンスに伴うサービス一時停止のお知らせ', update: '2026.03.13' },
  { date: '2026.03.03', title: '春のおすすめキャンペーン掲載開始のお知らせ', update: '2026.03.03' },
  { date: '2026.02.28', title: '一部商品の価格改定についてのご案内', update: '2026.02.28' },
  { date: '2026.02.14', title: '新規会員登録キャンペーンのお知らせ', update: '2026.02.14' }
]

const saleProducts = [
  { code: 'S01', unitPrice: '4.48', name: '使い捨てニトリルグローブ ブルー', tags: ['100枚入', 'SS / S / M / L'], salePrice: '448', originPrice: '498' },
  { code: 'S02', unitPrice: '6.20', name: '医療用マスク 3層構造タイプ', tags: ['50枚入', 'ホワイト'], salePrice: '620', originPrice: '780' },
  { code: 'S03', unitPrice: '8.90', name: 'ディスポエプロン 防水タイプ', tags: ['30枚入', 'フリーサイズ'], salePrice: '890', originPrice: '1,080' },
  { code: 'S04', unitPrice: '12.80', name: '滅菌パウチ ベーシックモデル', tags: ['200枚入', '複数サイズ'], salePrice: '1,280', originPrice: '1,580' }
]

const helpfulBanners = [
  { kicker: 'LATEX GLOVE', title: 'ラテックス手袋の特徴と選び方', desc: '素材の特性と使い分けをわかりやすく整理。', theme: 'theme-cream', figure: 'L' },
  { kicker: 'NITRILE GLOVE', title: 'ニトリル手袋の特徴と選び方', desc: '用途別に適した商品選定の考え方を案内。', theme: 'theme-blue', figure: 'N' },
  { kicker: 'HOW TO CHOOSE', title: '手袋の正しい選び方', desc: 'サイズ・用途・素材から比較して選定。', theme: 'theme-pink', figure: 'Q' },
  { kicker: 'TROUBLE CARE', title: '手の痒みの原因と対策', desc: '現場で起こりやすい悩みと対策情報を整理。', theme: 'theme-green', figure: 'C' },
  { kicker: 'SET SALE', title: 'お得なセット販売はこちら', desc: 'まとめ買い・法人導入向けのセット提案。', theme: 'theme-orange', figure: 'S' },
  { kicker: 'MASK GUIDE', title: '医療用マスク素材の基礎知識', desc: '性能や着用感の違いを比較しやすく整理。', theme: 'theme-purple', figure: 'M' }
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
  gap: 34px;
  align-items: center;
  padding: 24px 0 18px;
}

.logo-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-mark {
  width: 64px;
  height: 64px;
  border: 2px solid #0b5cab;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #0b5cab;
  font-weight: 800;
  font-size: 30px;
}

.logo-copy h1 {
  margin: 0;
  font-size: 34px;
  line-height: 1;
  letter-spacing: 1px;
  color: #154c7d;
}

.logo-copy p {
  margin: 6px 0 2px;
  color: #5a7389;
  font-size: 12px;
}

.logo-copy small {
  color: #8497a8;
  font-size: 12px;
}

.search-area {
  display: grid;
  gap: 10px;
}

.search-keywords {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7e92a3;
  font-size: 12px;
}

.search-keywords a {
  color: #0b5cab;
  text-decoration: none;
}

.search-block {
  display: flex;
  align-items: center;
  border: 1px solid #d8e5ef;
  border-radius: 999px;
  overflow: hidden;
  width: 100%;
  background: #fff;
}

.search-block input {
  flex: 1;
  border: none;
  padding: 15px 18px;
  font: inherit;
  outline: none;
}

.search-block button {
  border: none;
  background: #0b5cab;
  color: #fff;
  padding: 15px 24px;
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
  width: 44px;
  height: 44px;
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
  position: relative;
  color: #274764;
  text-decoration: none;
  font-weight: 600;
}

.nav-tabs a.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -16px;
  height: 3px;
  border-radius: 999px;
  background: #0b5cab;
}

.hero-wrap {
  padding: 32px 0 24px;
  background: #fff;
}

.hero-stage {
  display: grid;
  grid-template-columns: auto 0.78fr 1.22fr 0.78fr auto;
  gap: 18px;
  align-items: center;
}

.hero-card {
  border-radius: 30px;
  overflow: hidden;
  height: 392px;
  box-shadow: 0 16px 40px rgba(19, 49, 79, 0.1);
}

.hero-card.side {
  transform: scale(0.96);
  opacity: 0.9;
}

.hero-bg {
  position: relative;
  height: 100%;
  padding: 28px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-bg::before,
.hero-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}

.hero-bg::before {
  width: 160px;
  height: 160px;
  right: -20px;
  top: -20px;
}

.hero-bg::after {
  width: 120px;
  height: 120px;
  left: -20px;
  bottom: -20px;
}

.poster-tag {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(6px);
  font-size: 12px;
  letter-spacing: 1px;
}

.poster-tag.sale {
  background: rgba(255, 255, 255, 0.26);
}

.poster-copy {
  position: relative;
  z-index: 1;
}

.poster-copy small {
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.95;
}

.poster-copy h2,
.poster-copy h3 {
  margin: 0 0 12px;
  line-height: 1.08;
}

.poster-copy h2 {
  font-size: 48px;
}

.poster-copy h3 {
  font-size: 30px;
}

.poster-copy p {
  margin: 0;
  font-size: 16px;
  max-width: 92%;
}

.spring-bg {
  background: linear-gradient(135deg, #f4c8be, #ef7e86 58%, #e35f70);
}

.glove-bg {
  background: linear-gradient(135deg, #8dd7f2, #2f90d0 62%, #1d68b6);
}

.apron-bg {
  background: linear-gradient(135deg, #bfe7d8, #59c0a6 62%, #1d8f7e);
}

.carousel-arrow {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid #d9e7f1;
  background: #fff;
  color: #6b8093;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(19, 49, 79, 0.08);
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
  min-height: 80px;
}

.shortcut-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #edf7ff, #dceffc);
  color: #0b5cab;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.shortcut-text strong {
  display: block;
  color: #173653;
  font-size: 14px;
  line-height: 1.35;
}

.shortcut-arrow {
  color: #8aa0b3;
  font-size: 20px;
}

.news-section,
.sale-section,
.helpful-section,
.catalog-section,
.recent-section {
  padding: 44px 0 0;
}

.section-head-line,
.news-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.section-head-line h2,
.news-head h2 {
  margin: 0;
  font-size: 32px;
  color: #163450;
}

.section-head-line button,
.news-head button,
.recent-box button {
  border: 1px solid #d2e1ec;
  background: #fff;
  color: #31506b;
  border-radius: 999px;
  padding: 12px 18px;
  cursor: pointer;
}

.slim-card {
  box-shadow: none;
  border: 1px solid #e6eef4;
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

.sale-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.sale-card {
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 28px rgba(19, 49, 79, 0.05);
  border: 1px solid #e7eef4;
}

.unit-price {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: #ffe7ef;
  color: #d84d7f;
  font-size: 12px;
  font-weight: 700;
}

.sale-image {
  position: relative;
  margin-top: 16px;
  height: 200px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #f6fbff, #ecf5fb);
}

.pack-top {
  position: absolute;
  top: 28px;
  width: 72px;
  height: 16px;
  border-radius: 999px;
  background: #d9e8f4;
}

.pack-body {
  width: 120px;
  height: 138px;
  border-radius: 18px;
  background: linear-gradient(180deg, #f4fbff, #bfe0f5 70%, #90c5ea);
  display: grid;
  place-items: center;
  color: #0b5cab;
  font-size: 34px;
  font-weight: 800;
  box-shadow: 0 8px 18px rgba(31, 111, 185, 0.18);
}

.spec-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.spec-tags span {
  padding: 6px 10px;
  border-radius: 999px;
  background: #f2f6fa;
  color: #698196;
  font-size: 12px;
}

.sale-card h3 {
  margin: 14px 0 12px;
  font-size: 18px;
  color: #18324a;
  line-height: 1.4;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.sale-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #fff1f5;
  color: #d54b7d;
  font-size: 12px;
  font-weight: 800;
}

.price-group strong {
  font-size: 28px;
  color: #d54b7d;
}

.price-group span {
  margin-left: 6px;
  color: #7a8d9f;
  font-size: 12px;
}

.origin-price {
  margin-top: 8px;
  color: #9aa9b7;
  text-decoration: line-through;
}

.info-gap {
  margin-bottom: 22px;
}

.helpful-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.helpful-card {
  min-height: 220px;
  border-radius: 24px;
  overflow: hidden;
  padding: 28px;
  color: #173653;
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
}

.helpful-copy small {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1px;
}

.helpful-copy h3 {
  margin: 0 0 12px;
  font-size: 28px;
  line-height: 1.2;
}

.helpful-copy p {
  margin: 0 0 18px;
  color: rgba(23, 54, 83, 0.82);
}

.helpful-copy button,
.catalog-side button {
  border: none;
  background: #fff;
  color: #173653;
  border-radius: 999px;
  padding: 12px 18px;
  cursor: pointer;
  font-weight: 700;
}

.helpful-figure {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  display: grid;
  place-items: center;
  font-size: 46px;
  font-weight: 800;
}

.theme-cream { background: linear-gradient(135deg, #f8e7c6, #f1d19a); }
.theme-blue { background: linear-gradient(135deg, #dff5ff, #8ecff0); }
.theme-pink { background: linear-gradient(135deg, #ffe0ea, #f5a9c8); }
.theme-green { background: linear-gradient(135deg, #dff5e4, #9ad6a5); }
.theme-orange { background: linear-gradient(135deg, #ffe9cc, #f9b86f); }
.theme-purple { background: linear-gradient(135deg, #ece5ff, #b4a3f3); }

.catalog-banner {
  border-radius: 26px;
  background: linear-gradient(135deg, #0d5ca9, #1b8bc9 70%);
  color: #fff;
  padding: 28px;
  display: grid;
  grid-template-columns: 160px 1fr 240px;
  gap: 24px;
  align-items: center;
}

.catalog-free {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  display: grid;
  place-items: center;
  text-align: center;
}

.catalog-free span {
  display: block;
  font-size: 14px;
  letter-spacing: 1px;
}

.catalog-free strong {
  font-size: 38px;
}

.catalog-copy small {
  letter-spacing: 1px;
  opacity: 0.9;
}

.catalog-copy h2 {
  margin: 10px 0 12px;
  font-size: 34px;
  line-height: 1.2;
}

.catalog-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
}

.catalog-side {
  display: grid;
  gap: 16px;
  justify-items: center;
}

.catalog-book {
  width: 140px;
  height: 180px;
  border-radius: 16px;
  background: linear-gradient(180deg, #f0f7ff, #d4e7f7);
  color: #0b5cab;
  display: grid;
  place-items: center;
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.recent-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.recent-box p {
  margin: 0;
  color: #6f8699;
}

.footer-clone {
  margin-top: 56px;
  background: #f6f9fc;
  padding: 44px 0 50px;
  border-top: 1px solid #e3edf4;
}

.footer-clone-grid {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 24px;
}

.calendar-card,
.footer-center,
.footer-contact-card {
  background: #fff;
  border-radius: 22px;
  padding: 22px;
  border: 1px solid #e6eef4;
}

.calendar-card h3 {
  margin: 0 0 14px;
  color: #173653;
}

.calendar-box {
  border-radius: 18px;
  background: #f7fbfe;
  padding: 16px;
}

.calendar-header {
  text-align: center;
  font-weight: 700;
  color: #173653;
  margin-bottom: 12px;
}

.calendar-week,
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}

.calendar-week span,
.calendar-days span {
  display: grid;
  place-items: center;
  min-height: 28px;
  font-size: 12px;
  color: #60788e;
}

.calendar-days span.holiday {
  color: #d44f78;
  font-weight: 700;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-brand-mark {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 2px solid #0b5cab;
  color: #0b5cab;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.footer-brand strong {
  color: #173653;
}

.footer-brand p {
  margin: 4px 0 0;
  color: #6f8699;
  font-size: 13px;
}

.social-row {
  display: flex;
  gap: 12px;
  margin: 20px 0;
}

.social-row span {
  padding: 10px 16px;
  border-radius: 999px;
  background: #edf6ff;
  color: #0b5cab;
  font-weight: 700;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 20px;
}

.footer-links a {
  color: #456079;
  text-decoration: none;
}

.footer-contact-card {
  display: grid;
  gap: 16px;
}

.contact-panel {
  border-radius: 18px;
  background: #edf7ff;
  padding: 18px;
}

.contact-panel small {
  display: block;
  color: #5d7a93;
}

.contact-panel strong {
  display: block;
  margin-top: 8px;
  font-size: 30px;
  color: #0b5cab;
}

.contact-panel p {
  margin: 8px 0 0;
  color: #5f768c;
}

.contact-panel.fax {
  background: #fff3f7;
}

@media (max-width: 1100px) {
  .header-main {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .search-area,
  .search-block {
    width: 100%;
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

  .shortcut-grid,
  .sale-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .news-item,
  .catalog-banner,
  .footer-clone-grid,
  .helpful-card {
    grid-template-columns: 1fr;
  }

  .helpful-grid {
    grid-template-columns: 1fr;
  }

  .catalog-side {
    justify-items: start;
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
    height: 300px;
  }

  .poster-copy h2,
  .catalog-copy h2 {
    font-size: 32px;
  }

  .shortcut-grid,
  .sale-grid,
  .footer-links {
    grid-template-columns: 1fr;
  }

  .news-head,
  .section-head-line,
  .recent-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .recent-box {
    align-items: stretch;
  }
}
</style>
