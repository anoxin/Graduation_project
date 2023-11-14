<template lang="en">
  <div>
    <div class="container error__wrapper">
      <div class="error__info">
    <h2 class="error__title">404</h2>
    <p class="error__text">We are sorry, but the page you requested was not found</p>
    <router-link to="/" class="button__black">Back To Home <img src="@/assets/img/home-info/arrow.svg" alt="arrow"></router-link>
      </div>
    <div class="error__bg"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.error {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 50px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  &__title {
    color: #cda274;
    font-size: 250px;
  }
  &__text {
    font-size: 35px;
    margin-bottom: 40px;
  }
  &__bg {
    height: 800px;
    width: 100%;
    background: url(@/assets/img/error/bg.jpg) center / cover no-repeat;
    border-radius: 0px 0px 0px 353px;
  }
}
</style>
