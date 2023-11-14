<template lang="en">
  <div>
     <section class="project-details-bg">
    </section>
    <section class="minimal-bedrooms">
      <div class="container">
        <div class="minimal-bedrooms__wrapper">
          <div class="minimal-bedrooms__info">
          <h2 class="minimal-bedrooms__title">Minimal Look Bedrooms</h2>
          <p class="minimal-bedrooms__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. </p>
          <p class="minimal-bedrooms__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. </p>
          </div>
        
      

        </div>
        <SsrCarousel :paginateBySlide="true">
          <div class="slide slider__block">
            <a href="#"><img src="@/assets/img/project-details/zoom.svg" alt="zoom">
            </a>
          </div>
          <div class="slide slider__block">
            <a href="#"><img src="@/assets/img/project-details/zoom.svg" alt="zoom">
            </a>
          </div>
          <div class="slide slider__block">
            <a href="#"><img src="@/assets/img/project-details/zoom.svg" alt="zoom">
            </a>
          </div>
        
        </SsrCarousel>
      </div>
    </section>
    
  </div>
</template>
<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";

export default {
  components: {
    SsrCarousel,
    ssrCarouselCss,
  },
};
</script>

<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;
.project-details-bg {
  background: url(@/assets/img/project-details/bg.jpg);
  height: 351px;
  width: 100%;
}
.minimal-bedrooms {
  padding: 200px 100px;
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__info {
    width: 658px;
    margin-bottom: 70px;
  }
  &__title {
    font-size: 50px;
    margin-bottom: 20px;
  }
  &__text {
    margin-bottom: 30px;
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
  }
}
.slider {
  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1201px;
    height: 799px;
    border-radius: 70px;
    background: url(@/assets/img/project-details/slider.png) center/cover
      no-repeat;
  }
}
</style>
