<template lang="en">
  <div>
    
      <div class="blog-item">
          <h2 class="blog-item__title">{{title}}</h2>
          <div v-bind:style="{'background': `url(${img.background}) center/ cover no-repeat`}" class="blog-item__img"></div>
          <div class="blog-item__info">
              <span class="blog-item__date">26 December,2022</span>
              <nav class="breadcrumb blog-item__breadcrumb-right">
                  <ul class="breadcrumb__items">
                      <li class="breadcrumb__list breadcrumb__link__small">
                          <router-link to="/" class="breadcrumb__link"
                  >Home</router-link
                ></li>
                      <li class="breadcrumb__list breadcrumb__link__small">
                        <router-link to="/blog-page" class="breadcrumb__link"
                  >Blog</router-link>
                          </li>
                      <li class="breadcrumb__list breadcrumb__link__small">
                          <a class="breadcrumb__link" href="#">Decore</a></li>
                  </ul>
              </nav>
          </div>
          <p class="blog-item__text">
              {{text}}
          </p>
      </div>
  
    `,

    
  </div>
</template>
<script>
export default {
  name: "BlogList",
  props: ["title", "img", "text"],
  data() {
    return {};
  },
  methods: {
    consLog(img) {
      return require(img);
    },
  },
};
</script>
<style lang=""></style>
