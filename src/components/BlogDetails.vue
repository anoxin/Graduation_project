<template lang="en">
  <div>
         <div class="blog-details">
            <div class="blog-details__info">
                <div class="blog-details__info-limiter">

                    <h3 class="blog-details__info-symbol">,,</h3>

                </div>
                <p class="blog-details__info-text">The details are not the details. They make the design.
                </p>

            </div>
            <h2 class="blog-details__title">{{subtitle}}</h2>
            <p class="blog-details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered.</p>
            <ul class="blog-details__list">
                            <li class="blog-details__item">Contrary to popular belief.There are many variations of
                    passages of Lorem Ipsum available, but the majority have suffered.</li>
                <li class="blog-details__item">Contrary to popular belief.There are many variations of
                    passages of Lorem Ipsum available, but the majority have suffered.</li>
                <li class="blog-details__item">Contrary to popular belief.There are many variations of
                    passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ul>
            <div v-bind:style="{'background': `url(${design.background}) center/ cover no-repeat`}" class="blog-details__img"></div>
            <p class="blog-details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered.</p>

        </div>
    
  </div>
</template>
<script>
export default {
  name: "BlogDetails",
  props: ["subtitle", "design"],
};
</script>
<style lang="scss"></style>
