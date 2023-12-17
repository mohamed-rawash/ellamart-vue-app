<template>
  <div class="product-card">
    <span class="sale" v-if="true">Sale</span>
    <v-card elevation="0">
      <v-hover v-slot="{ isHovering, props }">
        <div class="image-parent position-relative">
          <img
            :src="product.images[0]"
            :alt="product.description"
            class="card-image"
            :style="`scale: ${isHovering ? 1.1 : 1}`"
            v-bind="props"
          />
          <v-btn
            density="compact"
            width="100"
            height="30"
            variant="outlined"
            class="quick-view-btn"
            color="white"
            @click="openQuickView(product)"
            >Quick View</v-btn
          >
        </div>
      </v-hover>
      <v-card-text class="description pl-0 pb-0 pt-0">{{
        product.description
      }}</v-card-text>

      <v-rating
        half-increments
        :model-value="product.rating"
        readonly
        active-color="amber"
        color="amber"
        size="x-small"
        density="combact"
      ></v-rating>
      <v-card-text class="pl-0 pb-0 pt-0">
        <del class="old-price">${{ product.price }}</del>
        from
        <span class="new-price"
          >${{
            product.price -
            Math.ceil(product.price * (product.discountPercentage / 100))
          }}</span
        >
      </v-card-text>
      <ul>
        <li>
          <input
            type="radio"
            name="#ffa5af"
            value="#ffa5af"
            :id="`${product.id}ffa5af`"
            v-model="color"
          />
          <label :for="`${product.id}ffa5af`" v-backgraound="'#ffa5af'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#ffc68c"
            value="#ffc68c"
            :id="`${product.id}ffc68c`"
            v-model="color"
          />
          <label :for="`${product.id}ffc68c`" v-backgraound="'#ffc68c'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#00308a"
            value="#00308a"
            :id="`${product.id}00308a`"
            v-model="color"
          />
          <label :for="`${product.id}00308a`" v-backgraound="'#00308a'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#00689e"
            value="#00689e"
            :id="`${product.id}00689e`"
            v-model="color"
          />
          <label :for="`${product.id}00689e`" v-backgraound="'#00689e'"></label>
        </li>
        <li>
          <input
            type="radio"
            name="#00a6b6"
            value="#00a6b6"
            :id="`${product.id}00a6b6`"
            v-model="color"
          />
          <label :for="`${product.id}00a6b6`" v-backgraound="'#00a6b6'"></label>
        </li>
      </ul>
      <v-btn
        variant="outlined"
        color="black"
        rounded
        density="combact"
        class="py-2"
        @click="
          this.$router.push({
            name: 'product_details',
            params: { productId: product.id },
          })
        "
        >Choose Options</v-btn
      >
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  inject: ["emitter"],
  data: () => ({
    color: "",
  }),
  directives: {
    backgraound: {
      mounted: (el, binding) => {
        el.style.backgroundColor = binding.value;
      },
    },
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
};
</script>

<style lang="scss">
.product-card {
  position: relative;
  overflow: hidden;
  width: 280px;
  .sale {
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    background-color: #f44336c2;
    padding: 0 10px;
    z-index: 1;
  }
  .image-parent {
    width: 100%;
    overflow: hidden;
    position: relative;
    .card-image {
      width: 100%;
      height: 120px;
      transition: 0.5s all ease-in-out;
      cursor: pointer;
    }
    .quick-view-btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 30px;
      text-transform: capitalize;
      opacity: 0;
      transition: 0.3s all ease-in;
      z-index: 100;
    }
    &:hover {
      .quick-view-btn {
        opacity: 100%;
      }
    }
  }
  .description {
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .new-price {
    color: red;
    font-size: 1.2rem;
    font-weight: 600;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: start;
    padding: 8px;
    padding-left: 2px;
    gap: 4px;
    li {
      input[type="radio"] {
        display: none;
        &:checked + label {
          border: 2px solid #e2e2e2;
          border-radius: 50%;
          transform: scale(1.2);
        }
      }
      label {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }
}
</style>
