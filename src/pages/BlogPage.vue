<template lang="">
  <div>
    <section class="blog blog-articles">
      <div class="container blog__content">
        <div class="blog__wrapper">
          <h1 class="blog__title">Статьи</h1>
          <nav class="breadcrumb">
            <ul class="breadcrumb__items">
              <li class="breadcrumb__list">
                <router-link to="/" class="breadcrumb__link">Главная</router-link>
              </li>
              <li class="breadcrumb__list">
                <router-link to="/blog-page" class="breadcrumb__link"
                  >Статьи</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
            <section class="latest-post">
          <div class="container">
            <h2 class="latest-post__title">Конструкторские разработки</h2>
            <div class="latest-post__cart">
              <img src="@/assets/img/blog/cart.jpg" alt="design" class="latest-post__cart-img" />
              <h3 class="latest-post__cart-title">
                Роль научно-исследовательских и опытно-конструкторских работ в России
              </h3>
              <p class="latest-post__cart-text">
                Многие предприятия сосредоточили свое внимание на научно-исследовательских и опытно-конструкторских
                работах (НИОКР) и именно от результатов исследования и зависят ключевые решения по развитию бизнеса.

                Понимая необходимость продвижения инновационных технологий и идей, в значительной мере было усилено
                финансовое обеспечение.

                Как можно увидеть, до кризиса 2009 года средства активно вкладывались в НИОКР, однако в тяжелой
                экономической ситуации произошли вынужденные сокращения расходов. Тем не менее, несмотря даже на
                докризисный показатели, Россия имела самый низкий уровень финансирования.

                Ситуация смягчалась активной модернизацией и повышением эффективности, однако сейчас вопросы о
                приоритете
                научно-исследовательских и опытно-конструкторских работах звучат все чаще.

                Тем не менее, эксперты заявляют, что развитие этой сферы произойдет не раньше, чем наступит
                экономическая
                стабильность
              </p>
            </div>
          </div>
        </section>


  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.blog {
  height: 356px;
  &-articles {
    background: url(@/assets/img/blog/bg2.jpg) center/cover no-repeat;
  }

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

.latest-post {
  padding: 50px 0 100px;

  &__title {
    font-size: 50px;
    margin-bottom: 33px;
    text-align: center;
  }

  &__cart-img {
    width: 569px;
    height: 478px;
    border-radius: 50px;
    float: left;
    margin-right: 50px;
    margin-bottom: 50px;
  }

  &__cart-title {
    font-size: 22px;
    margin-bottom: 20px;
    color: black;
    text-align: center;
    font-family: "Jost";
    line-height: 150%;
    text-transform: uppercase;
  }

  &__cart-text {
    color: #292f36;
    font-family: "Jost";
    font-size: 22px;
    line-height: 150%;
  }

  &__top {
    margin-top: 30px;
  }
}

.article-news {
  margin-bottom: 200px;

  &__title {
    font-size: 50px;
    margin-bottom: 30px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 51px;
  }
}

.pagination {
  display: flex;
  width: 268px;
  gap: 20px;
  margin: 0 auto;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    font-family: $jost;
    font-size: 16px;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid #cda274;
    border-radius: 50%;
    color: $text-color;

    &:hover {
      background-color: #f4f0ec;
    }
  }
}

@media (max-width: 1024px) {
  .latest-post__cart {
    display: flex;
    flex-direction: column;
    &-img {
      float: none;
      align-self: center;
      margin: 0 0 4%;
    }
  }
}

@media (max-width: 767px) {
  .blog {
    height: 200px;
  }
  .latest-post__cart {
    &-img {
      width: 90%;
      height: 30%;
    }
  }
  .latest-post__title {
    font-size: 35px;
  }
}
</style>
