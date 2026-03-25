<template>
  <div class="app-shell">
    <main class="site-main">
      <RouterView />
    </main>

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

.site-main {
  padding: 0 0 56px;
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
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>
