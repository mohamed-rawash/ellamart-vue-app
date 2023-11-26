<template>
  <div class="quality-feature">
    <v-contianer fluid>
      <v-row>
        <v-col v-for="feature in features" :key="feature.title">
          <div class="card">
            <font-awesome-icon class="icon" :icon="feature.icon" />
            <h3 class="title">{{ feature.title }}</h3>
            <p class="description">{{ feature.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-contianer>
  </div>
</template>
<script>
export default {
  data: () => ({
    features: [
      {
        icon: "fa-solid fa-star-half-stroke fa-2xl",
        title: "QUALITY AND SAVING",
        description: "Compoerhensive quality control and affordable price",
      },
      {
        icon: "fa-solid fa-warehouse",
        title: "GLOBAL WAREHOUSE",
        description: "37 Overseas warehouses",
      },
      {
        icon: "fa-solid fa-truck-fast",
        title: "FAST SHIPPING",
        description: "Fast and convenient door to door delivery",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "PAYMENT SECURITY",
        description: "More than IO different secure payment methods",
      },
      {
        icon: "fa-solid fa-circle-question",
        title: "HAVE QUESTIONS?",
        description: "24/7 Customer Service - We're here and happy to help",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.quality-feature {
  background-color: #e2e2e2;
  padding: 50px 15px;
  .card {
    position: relative;
    height: 100%;
    padding: 50px 20px;
    text-align: center;
    background-color: white;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    overflow: hidden;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 0;
      width: 3px;
      transition: all 1s ease-in-out;
    }
    &::before {
      top: 0;
      right: 0;
      background: rgb(193, 71, 233);
      background: linear-gradient(
        180deg,
        rgba(193, 71, 233, 1) 0%,
        rgba(229, 184, 244, 1) 100%
      );
    }
    &::after {
      left: 0;
      bottom: 0;
      background: rgb(193, 71, 233);
      background: linear-gradient(
        0deg,
        rgba(193, 71, 233, 1) 0%,
        rgba(229, 184, 244, 1) 100%
      );
    }
    &:hover {
      &::after,
      &::before {
        height: 100%;
      }
      .icon {
        animation: bounce 1s ease-in-out infinite normal;
      }
    }
    .icon {
      font-size: 5rem;
      color: rgba(193, 71, 233, 1);
    }
    .title {
      margin: 40px 0 10px;
    }
    .description {
      font-size: 12px;
      color: #777;
    }
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px) scaleY(1.1);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
