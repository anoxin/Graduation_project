<template lang="en">
  <div>
           <div class="cart-design">
            <div class="cart-design__wrapper">
              <div class="cart-design__top">
                <img
                  :src="cart.img"
                  alt="image design"
                  class="cart-design__top-img"
                />
                <span class="cart-design__top-info">{{ cart.name }}</span>
              </div>
              <h2 class="cart-design__title">
                {{ cart.text }}
              </h2>
              <div class="cart-design-bottom cart-design__bottom">
                <span class="cart-design__date">{{ cart.data }}</span>
                <router-link to="/blog-page" class="cart-design__link"><img src="@/assets/img/cart-design/link.svg" alt="link"
                /></router-link>
              </div>
            </div>
          </div>
    
  </div>
</template>
<script>
export default {
  name: "CartDesign",
  props: ["cart"],
};
</script>
<style lang="scss">
.cart-design {
  width: 340px;
  padding: 21px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__top {
    position: relative;
    margin-bottom: 21px;
  }

  &__top-img {
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  &__top-info {
    position: absolute;
    left: 25px;
    bottom: 25px;
    display: block;
    border-radius: 8px 8px 8px 0px;
    padding: 11px;
    background: #fff;
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
  }

  &__title {
    font-size: 25px;
    margin-bottom: 39px;
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__bottom {
    margin-bottom: 16px;
  }

  &__date {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #f4f0ec;
  }
}
</style>
