<template>
  <div class="banner">
    <div class="parent">
      <div class="content">
        <h3><span>Huge Saving</span> on UHD Televisions</h3>
        <p class="hint">Sale up to 70% off on selected items</p>
        <v-btn class="shop-btn py-2 px-3" variant="outlined">Shop Now</v-btn>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  .parent {
    width: 100%;
    height: calc(100vh - 138px);
    background-image: url("../../assets/images/banner-bg.jpg");
    background-size: cover;
    background-position: top;
    .content {
      color: white;
      padding: 100px 0 0 150px;
      width: 40%;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: rgb(10, 169, 147);
        }
      }
      .hint {
        margin: 20px 0;
      }
      .shop-btn {
        border-radius: 30px;
        text-transform: none;
      }
    }
  }
}
</style>
