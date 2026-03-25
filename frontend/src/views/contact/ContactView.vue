<template>
  <div class="container contact-page">
    <section class="contact-hero page-card">
      <div>
        <div class="pill">Contact Us</div>
        <h1>联系我们</h1>
        <p>面向企业 / 机构采购场景，支持电话咨询、表单留言、长期供货沟通与产品匹配建议。</p>
      </div>
      <div class="hero-phone">
        <strong>咨询热线</strong>
        <span>087-870-7335</span>
      </div>
    </section>

    <section class="grid grid-2 contact-grid">
      <article class="page-card form-card">
        <h2 class="section-title">提交采购咨询</h2>
        <p class="section-subtitle">当前为静态表单样式，下一步接后端提交接口。</p>

        <form class="contact-form" @submit.prevent>
          <div class="form-grid">
            <label>
              <span>联系人</span>
              <input type="text" placeholder="请输入联系人姓名" />
            </label>
            <label>
              <span>联系电话</span>
              <input type="text" placeholder="请输入联系电话" />
            </label>
          </div>

          <div class="form-grid">
            <label>
              <span>机构名称</span>
              <input type="text" placeholder="请输入医院 / 诊所 / 公司名称" />
            </label>
            <label>
              <span>咨询类型</span>
              <select>
                <option>商品询价</option>
                <option>长期供货</option>
                <option>产品咨询</option>
                <option>商务合作</option>
              </select>
            </label>
          </div>

          <label>
            <span>需求说明</span>
            <textarea rows="6" placeholder="请输入采购需求、产品方向、数量范围或其他说明"></textarea>
          </label>

          <button class="btn-primary submit-btn" type="submit">提交咨询</button>
        </form>
      </article>

      <article class="page-card info-card">
        <h2 class="section-title">联系信息</h2>
        <div class="info-list">
          <div>
            <strong>服务热线</strong>
            <span>087-870-7335</span>
          </div>
          <div>
            <strong>电子邮箱</strong>
            <span>sales@happyhands-clone.local</span>
          </div>
          <div>
            <strong>服务时间</strong>
            <span>平日 9:00 - 18:00</span>
          </div>
          <div>
            <strong>服务方向</strong>
            <span>牙科耗材 / 医疗卫材 / B2B 机构采购</span>
          </div>
        </div>

        <div class="map-box">
          <span>Map / Office Area</span>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 28px;
}

.contact-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.contact-hero h1 {
  margin: 16px 0 12px;
  font-size: 40px;
  color: #14314f;
}

.contact-hero p {
  margin: 0;
  color: #647b90;
  max-width: 720px;
}

.hero-phone {
  min-width: 240px;
  padding: 22px;
  border-radius: 18px;
  background: #edf7ff;
}

.hero-phone strong {
  display: block;
  color: #0b5cab;
}

.hero-phone span {
  display: block;
  margin-top: 8px;
  font-size: 28px;
  font-weight: 800;
  color: #14314f;
}

.contact-grid {
  margin-top: 24px;
}

.contact-form {
  display: grid;
  gap: 18px;
  margin-top: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
}

label span {
  font-weight: 700;
  color: #24435e;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid #d9e7f1;
  border-radius: 14px;
  padding: 14px 16px;
  font: inherit;
  color: #173653;
  background: #fcfeff;
}

textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
}

.info-list {
  display: grid;
  gap: 14px;
}

.info-list div {
  padding: 18px;
  border-radius: 16px;
  background: #f4faff;
}

.info-list strong {
  display: block;
  margin-bottom: 8px;
  color: #0b5cab;
}

.info-list span {
  color: #5f768c;
}

.map-box {
  margin-top: 20px;
  min-height: 240px;
  border-radius: 18px;
  background: linear-gradient(135deg, #e6f3ff, #dceff3);
  display: grid;
  place-items: center;
  color: #5b809c;
  font-weight: 700;
}

@media (max-width: 768px) {
  .contact-hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-hero h1 {
    font-size: 30px;
  }

  .hero-phone {
    min-width: auto;
    width: 100%;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
