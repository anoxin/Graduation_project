<template lang="ru">
    <div>
    <section class="blog">
      <div class="container blog__content">
        <div class="blog__wrapper">
          <h1 class="blog__title">Our Project</h1>
          <nav class="breadcrumb">
            <ul class="breadcrumb__items">
              <li class="breadcrumb__list">
                <router-link to="/" class="breadcrumb__link">Home</router-link>
              </li>
              <li class="breadcrumb__list">
                <router-link to="/our-project" class="breadcrumb__link">Project</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="our-project">
        <div class="container">
          <div class="our-project__buttons">
            <button @click="isActive(index)" class="our-project__button" :class="{button_active: button.active}" v-for="(button, index) in buttons" :key="index">{{button.name}}</button> 
          </div>
          <div class="our-project__cart-list">
            <CartItem v-for="(cart, index) in carts" :key="index" :cart ="cart" :class="cart.class"/>
          </div>
        </div>

    </section>

        
    </div>
</template>
<script>
import CartItem from "@/components/CartItem.vue";
export default {
  name: "OurProject",
  components: {
    CartItem,
  },
  data() {
    return {
      carts: [
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/1.jpg"),
          star: false,
          class: "post-1",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/2.jpg"),
          star: false,
          class: "post-2",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/3.jpg"),
          star: false,
          class: "post-3",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/4.jpg"),
          star: false,
          class: "post-4",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/5.jpg"),
          star: false,
          class: "post-5",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/6.jpg"),
          star: false,
          class: "post-6",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/7.jpg"),
          star: false,
          class: "post-7",
        },
        {
          name: "Minimal Bedroom",
          decor: "Artchitecture",
          img: require("@/assets/img/our-project/8.jpg"),
          star: false,
          class: "post-8",
        },
      ],

      buttons: [
        { name: "Bathroom", active: true },
        { name: "Bed Room", active: false },
        { name: "Kitchan", active: false },
        { name: "Living Area", active: false },
      ],
    };
  },
  methods: {
    isActive(index) {
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].active = false;
      }
      this.buttons[index].active = true;
    },
  },
};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.blog {
  height: 356px;
  background: url(@/assets/img/our-project/bg.jpg) center/cover no-repeat;

  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
  }

  &__wrapper {
    display: flex;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
  }

  &__title {
    font-size: 50px;
  }
}
.our-project {
  padding: 200px 0;

  &__buttons {
    display: flex;
    justify-content: space-between;
    width: 880px;
    margin: 0 auto;
    border-radius: 19px;
    border: 1px solid #cda274;
    margin-bottom: 61px;
  }

  &__button {
    padding: 26px 66px;
    border-radius: 18px;
    text-align: center;
    background-color: #fff;
    font-family: $jost;
    font-weight: 600;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      background: #cda274;
      color: #fff;
    }
  }
  &__cart-list {
    display: grid;

    grid-template-areas:
      "post-1  post-2"
      "post-1  post-2"
      "post-1  post-4"
      "post-3  post-4"
      "post-3  post-4"
      "post-5  post-6"
      "post-5  post-6"
      "post-5  post-7"
      "post-8  post-7"
      "post-8 .";
    gap: 30px;
  }

  .button_active {
    background: #cda274;
    color: #fff;
  }
  .post-1 {
    grid-area: post-1;
    height: 947px;
  }
  .post-2 {
    grid-area: post-2;
  }
  .post-3 {
    grid-area: post-3;
  }
  .post-4 {
    grid-area: post-4;
  }
  .post-5 {
    grid-area: post-5;
  }
  .post-6 {
    grid-area: post-6;
  }
  .post-7 {
    grid-area: post-7;
  }
  .post-8 {
    grid-area: post-8;
  }
}
</style>
