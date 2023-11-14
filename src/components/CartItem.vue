<template lang="en">
    <div>
        <div class="cart-project" :class="cart.post" >
            <div class="cart-project__img-block">
                <img :src="cart.img" alt="project-1" class="cart__img">
            </div>
            <div class="cart-project__block-info">
                <div class="cart-project__text">
                    <h3 class="cart-project__title">{{cart.name}}</h3>
                    <p class="cart-project__text-info">Decor / {{cart.decor}}</p>
                </div>
                <router-link to="/blog-page" class="cart-project__link"><img src="@/assets/img/projects/link.svg" alt="link"></router-link>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: "CartItem",
  props: ["cart"],
};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.cart-project {
  &__block-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  &__img {
    width: inherit;

    &-block {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  &__title {
    margin-bottom: 4px;
    font-size: 25px;
  }

  &__text-info {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #f4f0ec;
  }
}
</style>
