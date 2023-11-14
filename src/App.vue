<template>
  <div id="app">
    <HeaderContent />
    <router-view v-on:close="isPopup = true" />
    <!-- <MainPage  /> -->
    <!-- <BlogPage /> -->
    <!-- <BlogDetailsPage /> -->
    <!-- <OurProject /> -->
    <!-- <ProjectDetails /> -->
    <FooterContent />
    <ModalWindow v-if="isPopup" v-on:close="close($event)" />
  </div>
</template>

<script>
// import MainPage from "./pages/MainPage.vue";
// import BlogPage from "./pages/BlogPage.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import FooterContent from "@/components/FooterContent.vue";
import ModalWindow from "@/components/ModalWindow.vue";
// import BlogDetailsPage from "./pages/BlogDetailsPage.vue";
// import OurProject from "@/pages/OurProject.vue";
// import ProjectDetails from "@/pages/ProjectDetails.vue";

export default {
  name: "App",
  components: {
    HeaderContent,
    FooterContent,
    ModalWindow,
    // MainPage,
    // BlogPage,
    // BlogDetailsPage,
    // OurProject,
    // ProjectDetails,
  },
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    close(info) {
      this.isPopup = info;
      return this.isPopup;
    },
  },
};
</script>

<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

/*--------------------*/

@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:wght@400;500;600&display=swap");

body {
  color: $text-color;
  background-color: #fff;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  color: $text-color;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
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

// cart-design
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

.breadcrumb {
  &__items {
    display: flex;
  }

  &__list {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;

    &:not(:last-child)::after {
      content: "/";
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  &__link {
    color: inherit;
  }
}
</style>
