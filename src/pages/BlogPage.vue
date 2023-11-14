<template lang="">
  <div>
    <section class="blog">
      <div class="container blog__content">
        <div class="blog__wrapper">
          <h1 class="blog__title">Articles & News</h1>
          <nav class="breadcrumb">
            <ul class="breadcrumb__items">
              <li class="breadcrumb__list">
                <router-link to="/" class="breadcrumb__link">Home</router-link>
              </li>
              <li class="breadcrumb__list">
                <router-link to="/blog-page" class="breadcrumb__link"
                  >Blog</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <section class="latest-post">
      <div class="container">
        <h2 class="latest-post__title">Latest Post</h2>
        <div class="latest-post__cart">
          <img
            src="@/assets/img/blog/cart.jpg"
            alt="design"
            class="latest-post__cart-img"
          />
          <div class="latest-post__cart-info">
            <h3 class="latest-post__cart-title">
              Low Cost Latest Invented Interior Designing Ideas
            </h3>
            <p class="latest-post__cart-text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief
            </p>
            <p class="latest-post__cart-text">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <div class="cart-design-bottom latest-post__top">
              <span class="cart-design__date">26 December,2022 </span>
              <router-link to="/blog-details-page" class="cart-design__link"
                ><img src="@/assets/img/cart-design/link.svg" alt="link"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="article-news">
      <div class="container">
        <h2 class="article-news__title">Latest Post</h2>
        <div id="article-news-card" class="article-news__wrapper">
          <CartDesign v-for="cart in carts" :key="cart.id" :cart="cart" />
        </div>
        <div class="pagination">
          <a href="#" class="pagination__item">01</a>
          <a href="#" class="pagination__item">02</a>
          <a href="#" class="pagination__item">03</a>
          <a href="#" class="pagination__item">
            <img src="@/assets/img/cart-design/link.svg" alt="link" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CartDesign from "@/components/CartDesign.vue";

export default {
  name: "BlogPage",
  components: {
    CartDesign,
  },
  data() {
    return {
      carts: [
        {
          id: 1,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/1.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 2,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/2.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 3,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/3.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 4,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/1.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 5,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/2.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 6,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/3.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.blog {
  height: 356px;
  background: url(@/assets/img/blog/bg.jpg) center/cover no-repeat;

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
  padding: 200px 0;

  &__title {
    font-size: 50px;
    margin-bottom: 33px;
  }

  &__cart {
    display: flex;
  }

  &__cart-img {
    width: 569px;
    height: 478px;
    border-radius: 50px;
  }

  &__cart-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 22px;
    padding: 65px;
  }

  &__cart-title {
    font-size: 25px;
  }

  &__cart-text {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
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
</style>
