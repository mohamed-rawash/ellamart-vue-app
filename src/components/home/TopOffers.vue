<template>
  <div class="top-offers">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <div class="parent">
            <img
              src="@/assets/images/playstations.webp"
              alt="playstations"
              class="image"
            />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="parent">
            <img
              src="@/assets/images/headset.webp"
              alt="headset"
              class="image"
            />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="parent">
            <img src="@/assets/images/chairs.webp" alt="chairs" class="image" />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="parent">
            <img
              src="@/assets/images/iphones.webp"
              alt="iphones"
              class="image"
            />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="parent">
            <img
              src="@/assets/images/laptops.webp"
              alt="laptops"
              class="image"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.top-offers {
  padding: 30px 0;
  background-color: #e2e2e2;
  .parent {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background-color: rgba(0, 0, 0, 0.2);
      transition: 0.8s all ease-in-out;
      z-index: 1;
    }
    &:hover {
      .image {
        transform: scale(1.1);
      }
      &::before {
        transform: translate(-50%, -50%) scale(3);
      }
    }
    .image {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: 0.6s all ease-in-out;
    }
  }
}
</style>
