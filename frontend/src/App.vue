<template>
  <div class="app-shell">
    <div class="topbar">
      <div class="container topbar-inner">
        <span>医疗 / 牙科卫材一站式采购服务</span>
        <span>工作时间 9:00 - 18:00（平日）</span>
      </div>
    </div>

    <header class="site-header">
      <div class="container nav-wrap">
        <div class="brand-block">
          <div class="brand-mark">HH</div>
          <div>
            <div class="brand">Happy Hands Clone</div>
            <div class="brand-sub">Dental & Medical Supply Platform</div>
          </div>
        </div>

        <nav class="nav">
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/products">商品中心</RouterLink>
          <RouterLink to="/articles">新闻资讯</RouterLink>
          <RouterLink to="/about">关于我们</RouterLink>
          <RouterLink to="/contact">联系我们</RouterLink>
        </nav>

        <div class="header-contact">
          <strong>咨询热线</strong>
          <span>087-870-7335</span>
        </div>
      </div>
    </header>

    <main class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h4>Happy Hands Clone</h4>
          <p>面向医院与牙科场景的专业卫材展示与采购站点。</p>
        </div>
        <div>
          <h4>快速入口</h4>
          <ul>
            <li><RouterLink to="/products">商品中心</RouterLink></li>
            <li><RouterLink to="/articles">新闻资讯</RouterLink></li>
            <li><RouterLink to="/contact">联系我们</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>联系方式</h4>
          <p>电话：087-870-7335</p>
          <p>邮箱：sales@happyhands-clone.local</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #18324a;
  background: #f4f8fb;
  line-height: 1.5;
  font-weight: 400;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: #f4f8fb;
}

body, #app {
  min-height: 100vh;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  background: #0e5aa7;
  color: #eaf5ff;
  font-size: 13px;
}

.topbar-inner {
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e0ebf4;
}

.nav-wrap {
  min-height: 86px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #0b5cab, #49b8c8);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.brand {
  font-size: 22px;
  font-weight: 800;
  color: #0b5cab;
}

.brand-sub {
  color: #6b7f92;
  font-size: 12px;
}

.nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

.nav a,
.site-footer a {
  color: #26445f;
  text-decoration: none;
}

.nav a.router-link-active {
  color: #0b5cab;
  font-weight: 700;
}

.header-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #0b5cab;
}

.header-contact span {
  font-size: 20px;
  font-weight: 800;
}

.site-main {
  padding: 0 0 56px;
}

.site-footer {
  background: #0d1f33;
  color: #d8e5f2;
  padding: 40px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 24px;
}

.footer-grid h4 {
  margin: 0 0 12px;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.footer-grid a {
  color: #d8e5f2;
}

.page-card {
  background: #fff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 12px 40px rgba(24, 50, 74, 0.08);
}

.section-title {
  margin: 0 0 10px;
  font-size: 30px;
  color: #14314f;
}

.section-subtitle {
  margin: 0;
  color: #698095;
}

.grid {
  display: grid;
  gap: 20px;
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #e8f4ff;
  color: #0b5cab;
  font-weight: 700;
}

.btn-primary,
.btn-secondary {
  border: none;
  border-radius: 12px;
  padding: 14px 22px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #0b5cab, #2a90c9);
  color: #fff;
}

.btn-secondary {
  background: #edf6fc;
  color: #0b5cab;
}

@media (max-width: 1024px) {
  .nav-wrap {
    grid-template-columns: 1fr;
    padding: 16px 0;
  }

  .brand-block,
  .header-contact {
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .footer-grid,
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .topbar-inner {
    flex-direction: column;
    justify-content: center;
    padding: 8px 0;
  }

  .grid-2,
  .grid-3,
  .grid-4,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    gap: 14px;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>
