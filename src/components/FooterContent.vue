<template lang="en">
  <div>
        <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__about">
                  <router-link to="/" class="link-logo">
                    <div class="logo">
                        <img class="logo__img" src="@/assets/img/logo/Logo.png" alt="logo">
                        <span class="logo__text">Конструктор</span>
                    </div>
                  </router-link>
                    <p class="footer__about-info">
                        Предоставляет услуги по разработке конструкторской документации (КД) по ГОСТ на заказ
                    </p>

                </div>
                <div class="footer__pages">
                    <h3 class="footer__subtitle">Страницы</h3>
                    <router-link to="/" class="footer__link">Главная</router-link>
                    <router-link to="/our-project" class="footer__link">О нас</router-link>
                    <router-link to="/blog-page" class="footer__link">Статьи</router-link>
                </div>
                <div class="footer__contact">
                    <h3 class="footer__subtitle">Контакты</h3>
                    <p class="footer__contact-text">г. Москва ул. Котляковская д. 18</p>
                    <p class="footer__contact-text">contact@vt.com</p>
                    <p class="footer__contact-text">(123) 456 - 7890</p>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "FooterContent",
};
</script>

<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.footer {
  margin-bottom: 134px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &__about {
    max-width: 393px;
  }

  &__about-info {
    margin-top: 18px;
    margin-bottom: 31px;
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
  }

  &__about-social-network {
    display: flex;
    justify-content: space-between;
    width: 90px;
  }

  &__pages {
    display: flex;
    flex-direction: column;
    margin-right: 100px;
  }

  &__subtitle {
    color: #292f36;
    font-size: 25px;
    margin-bottom: 20px;
  }

  &__link {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 30px;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    max-width: 258px;
  }

  &__contact-text {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .footer__wrapper {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 50px;
  }
}
</style>
