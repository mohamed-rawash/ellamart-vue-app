<template>
  <div class="top-cat">
    <div style="height: 300px; width: 100%">
      <div class="cyber-banner"></div>
    </div>
    <div class="heading d-flex justify-center align-center px-10">
      <div class="flex-grow-1 d-flex justify-center">
        <h2 class="my-5 title">Top Categories</h2>
      </div>
      <a href="#" class="text-black">Shop All</a>
    </div>
    <v-continer>
      <v-row class="py-10 px-8">
        <v-col
          class="d-flex justify-center flex-column align-center"
          sm="6"
          md="4"
          lg="2"
          cols-lg
          v-for="cat in categories"
          :key="cat.title"
        >
          <div class="parent">
            <img :src="cat.image" alt="" />
          </div>
          <p class="mt-2">{{ cat.title }}</p>
        </v-col>
      </v-row>
    </v-continer>
  </div>
</template>
<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Smart Phones",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Laptops",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "Tvs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "Pcs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Video Games",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consume",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>
<style lang="scss">
.top-cat {
  .cyber-banner {
    max-width: 100%;
    height: 300px;
    background-color: #172381;
    background-image: url("@/assets/images/cyber-banner.webp");
    background-size: cover;
  }
  .heading {
    .title {
      position: relative;
      transition: 0.3s all 0.3s ease-in-out;
      width: fit-content;
      padding: 0 6px;
      background-color: transparent;
      overflow: hidden;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 30;
        left: 0;
        width: 0;
        transition: 0.3s all ease-in-out;
      }
      &::before {
        height: 100%;
        background-color: rgba(19, 37, 171, 0.58);
        z-index: -1;
      }
      &::after {
        height: 3px;
        background-color: #0a24ec;
      }
      &:hover {
        color: white;
        &::before,
        &::after {
          width: 100%;
          border-radius: 6px;
        }
      }
    }
  }
  .parent {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    background-color: antiquewhite;
    border: 0 solid bisque;
    transition: 0.5s all 0.5s ease-in;
    & img {
      width: 100%;
      transition: 0.5s all ease-in;
    }
    &:hover {
      & img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
