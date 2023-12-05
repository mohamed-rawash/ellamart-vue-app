<template>
  <div class="shop-with-us">
    <div class="title">
      <h2><span>Why Shop</span> With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col sm="12" lg="3">
          <div class="item-card">
            <div class="image-parent">
              <img
                src="../../assets/images/free-shipping.png"
                alt="Free Shipping"
              />
            </div>
            <h3>Free Shipping On First Order</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a
              corrupti natus quibusdam sit quia, inventore illum dolor unde
              dicta saepe cupiditate omnis dolores aut cum praesentium eos
              deserunt repellat!
            </p>
            <a href="#"> Learn More</a>
          </div>
        </v-col>
        <v-col sm="12" lg="3">
          <div class="item-card">
            <div class="image-parent">
              <img
                src="../../assets/images/weekly-flash-sales.png"
                alt="Free Shipping"
              />
            </div>
            <h3>Weekly Flash Sales</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a
              corrupti natus quibusdam sit quia, inventore illum dolor unde
              dicta saepe cupiditate omnis dolores aut cum praesentium eos
              deserunt repellat!
            </p>
            <a href="#"> Learn More</a>
          </div>
        </v-col>
        <v-col sm="12" lg="3">
          <div class="item-card">
            <div class="image-parent">
              <img src="../../assets/images/discount.png" alt="Free Shipping" />
            </div>
            <h3>Anual Payment Discount</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a
              corrupti natus quibusdam sit quia, inventore illum dolor unde
              dicta saepe cupiditate omnis dolores aut cum praesentium eos
              deserunt repellat!
            </p>
            <a href="#"> Learn More</a>
          </div>
        </v-col>
        <v-col sm="12" lg="3">
          <div class="item-card">
            <div class="image-parent">
              <img
                src="../../assets/images/cash-back.png"
                alt="Free Shipping"
              />
            </div>
            <h3>Cashback Reward Program</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a
              corrupti natus quibusdam sit quia, inventore illum dolor unde
              dicta saepe cupiditate omnis dolores aut cum praesentium eos
              deserunt repellat!
            </p>
            <a href="#"> Learn More</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script></script>
<style lang="scss">
.shop-with-us {
  padding: 50px 20px;
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-repeat: repeat-x;
  background-size: cover;
  .title {
    text-align: center;
    color: white;
    font-size: 35px;
    font-weight: 900;
    & span {
      color: #00fdda;
    }
  }
  .item-card {
    text-align: center;
    color: white;
    overflow: hidden;
    padding: 0 20px;
    & h3 {
      font-size: 1.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & p {
      font-size: 0.7rem;
    }
    & a {
      color: white;
    }
  }
}
</style>
