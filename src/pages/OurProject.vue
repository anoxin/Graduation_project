<template lang="ru">
    <div>
    <section class="blog blog_about">
      <div class="container blog__content">
        <div class="blog__wrapper">
          <h1 class="blog__title">О&nbsp;нас</h1>
          <nav class="breadcrumb">
            <ul class="breadcrumb__items">
              <li class="breadcrumb__list">
                <router-link to="/" class="breadcrumb__link">Главная</router-link>
              </li>
              <li class="breadcrumb__list">
                <router-link to="/our-project" class="breadcrumb__link">О&nbsp;нас</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

     <section class="about">
    <div class="container">
      <div class="about-info">
        <h2 class="about-info__title">РАЗРАБОТКА КОНСТРУКТОРСКОЙ ДОКУМЕНТАЦИИ , ПРОЕКТИРОВАНИЕ И РАСЧЕТЫ-ОСНОВНЫЕ УСЛУГИ
          КОНСТРУКТОРА В КБ?</h2>
        <p class="about-info__text">
          И Да и Нет. Так как у нас Конструкторское Бюро широкого профиля, то у нас трудятся специалисты из разных
          областей инженерии. Есть дизайнеры, расчетный отдел, КМД-шники, инженеры-конструкторы, инженеры-электронщики,
          архитекторы, и многие другие. Охватить все области проектирования достаточно сложно. Но мы постарались собрать
          команду настоящих профессионалов. Поэтому наше КБ способно выполнять достаточно широкий круг задач. В том
          числе-нестандартные. Мы имеем более сотни выполненных проектов, многие из которых успешно реализованы в железе
          и успешно работают. У нас много довольных клиентов, с которыми мы работаем уже много лет. Есть
          благодарственные письма и большое портфолио с проектной частью и итоговой — в «железе». Поэтому мы с
          уверенностью можем предложить Вам стать нашим партнером, или заказчиком.
        </p>

      </div>

       <div class="project-img__img project-img__img_one">
      </div>

    <div class="about-info">
      <h2 class="about-info__title">КАКИЕ УСЛУГИ КОНСТРУКТОРА НАИБОЛЕЕ АКТУАЛЬНЫ НА ДАННЫЙ МОМЕНТ?</h2>
      <p class="about-info__text">
        В последние годы наблюдается тенденция по разработке нового оборудования и автоматизации производства. В связи с
        этим самая востребованная услуга — разработка оборудования. И как правило это разработка нестандартного
        оборудования. На втором месте идет услуга по реверс-инжинирингу (Обратное проектирование). Это вызвано сложной
        ситуацией на рынке импортных продуктов и санкционный политикой в отношении государства. Отсюда вытекает
        потребность в импортозамещения. И Как следствие необходимость проектирования по импортному аналогу оборудования,
        техники и т.д. Стоить отметить потребности в проектировании техники в различных отраслях, проектировании малых
        архитектурных форм, модульных зданий и сооружений, металлоконструкций и многого другого.

        Вообще очень Важно развивать свои идеи и воплощать их в Жизнь. В этом и помогают специалисты нашего КБ
        предоставляя услуги конструктора, технического дизайнера, архитектора и др.</p>

    </div>
    </div>
  </section>

  <section class="project-img">
    <div class="container">
      <div class="project-img__img">
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
  &_about {
    background: url(@/assets/img/our-project/bg.jpg) center/cover no-repeat;
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

.about {
  margin: 60px 0;
}
.about-info {
  margin-bottom: 30px;
  &__title {
    margin: 50px 0 30px;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    text-align: center;
    line-height: 150%;
  }

  &__text {
    color: #292f36;
    font-family: Jost;
    font-size: 22px;
    line-height: 150%;
  }
}

.project-img {
  margin-bottom: 100px;
  &__img {
    background: url(@/assets/img/main-info/Images.jpeg) center center/cover
      no-repeat;
    height: 400px;
    width: 100%;
    border-radius: 80px;
    &_one {
      background: url(@/assets/img/our-project/bg.jpg) center center/cover
        no-repeat;
    }
  }
}
</style>
