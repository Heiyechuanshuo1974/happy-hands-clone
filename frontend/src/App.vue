<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="container nav-wrap">
        <div class="brand">Happy Hands Clone</div>
        <nav class="nav">
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/products">商品中心</RouterLink>
          <RouterLink to="/articles">新闻资讯</RouterLink>
          <RouterLink to="/about">关于我们</RouterLink>
          <RouterLink to="/contact">联系我们</RouterLink>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>© 2026 Happy Hands Clone. Vue + Spring Boot.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1f2d3d;
  background: #f5f7fa;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
}

body, #app {
  min-height: 100vh;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  border-bottom: 1px solid #e5eaf3;
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand {
  font-size: 22px;
  font-weight: 700;
  color: #0b5cab;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: #334155;
  text-decoration: none;
}

.nav a.router-link-active {
  color: #0b5cab;
  font-weight: 600;
}

.site-main {
  padding: 24px 0 48px;
}

.site-footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 24px 0;
}

.page-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
}

.hero {
  background: linear-gradient(135deg, #0b5cab, #3aa6b9);
  color: #fff;
  border-radius: 20px;
  padding: 48px 32px;
  margin-bottom: 24px;
}

.grid {
  display: grid;
  gap: 20px;
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card-title {
  margin: 0 0 12px;
  font-size: 20px;
}

.muted {
  color: #64748b;
}

@media (max-width: 900px) {
  .nav-wrap {
    flex-direction: column;
    height: auto;
    padding: 16px 0;
    gap: 12px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .grid-3 {
    grid-template-columns: 1fr;
  }
}
</style>
