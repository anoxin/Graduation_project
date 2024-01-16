<template lang="en">
  <div>
     <header class="header">
        <div class="container">
            <div class="header__wrapper">
              <router-link to="/" class="link-logo">
                <div class="logo">
                    <img class="logo__img" src="@/assets/img/logo/Logo.png" alt="logo">
                    <span class="logo__text">Конструктор</span>
                </div>
              </router-link>
                <nav class="header__menu">
                    <router-link to="/" class="header__link">Главная</router-link>
                    <router-link to="/our-project" class="header__link">О нас</router-link>
                    <router-link to="/blog-page" class="header__link">Статья</router-link>
                </nav>
            </div>
        </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__menu {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
  }

  &__link {
    padding: 65px 0;
    font-family: $jost;
    font-size: 20px;
    color: $text-color;
  }
}
.logo {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 10px;

  &__img {
    width: 70px;
  }

  &__text {
    font-size: 40px;
  }
}

@media (max-width: 767px) {
  .logo {
    &__img {
      width: 50px;
    }

    &__text {
      font-size: 20px;
      display: none;
    }
  }

  .header__link {
    font-size: 15px;
  }
  .header__menu {
    gap: 20px;
  }
}
</style>
