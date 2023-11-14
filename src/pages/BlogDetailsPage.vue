<template lang="en">
  <div>

    <section class="blog-details-bg">
    </section>

    <section id="blog" class="articles-blog">
        <div class="container">

            <div class="articles-blog__wrapper">
                <div class="blog-list">
                    <div @click="showDetails(index)" style="margin-bottom: 60px;" v-for="(blog, index) in blogArrs"
                        :key="index" v-show="blog.filterList">
                        <BlogList :title="blog.title" :img="blog.img" :text="blog.info" v-show="blog.listShow"/>
                        <BlogDetails :subtitle="blog.subtitle"
                        :design="blog.design" v-show="blog.show"/>
                    </div>
                </div>

                <div class="tags">
                    <h2 class="tags__title">Tags</h2>
                    <div class="tags__wrapper">
                        <button class="tags__button" @click="filterList('Kitchen')">Kitchen</button>
                        <button class="tags__button" @click="filterList('Bedroom')">Bedroom</button>
                        <button class="tags__button" @click="filterList('Building')">Building</button>
                        <button class="tags__button" @click="filterList('Architecture')">Architecture</button>
                        <button class="tags__button" @click="filterList('Kitchen Planning')">Kitchen Planning</button>
                        <button class="tags__button" @click="filterList('Bedroom')">Bedroom</button>

                    </div>
                </div>
            </div>


        </div>
    </section>
    
  </div>
</template>
<script>
import BlogList from "@/components/BlogList.vue";
import BlogDetails from "@/components/BlogDetails.vue";
export default {
  name: "BlogDetailsPage",
  props: ["subtitle", "design"],
  components: {
    BlogDetails,
    BlogList,
  },
  data() {
    return {
      blogArrs: [
        {
          title: "#1 Let’s Get Solution for Building Construction Work",
          img: {
            background: require("@/assets/img/blog-details/blog-1.png"),
          },
          info: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                      to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
                      have suffered alteration in some form, by injecthumour, or randomised words which don't look even
                      slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                      the Internet tend to repeat predefined chunks as necessary.`,
          subtitle: "#1 Design sprints are great",
          design: {
            background: require("@/assets/img/blog-details/blog-2.png"),
          },
          show: false,
          listShow: true,
          filter: ["Kitchen", "Bedroom"],
          filterList: true,
        },
        {
          title: "#2 Let’s Get Solution for Building Construction Work",
          img: {
            background: require("@/assets/img/blog-details/blog-2.png"),
          },
          info: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                      to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
                      have suffered alteration in some form, by injecthumour, or randomised words which don't look even
                      slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                      the Internet tend to repeat predefined chunks as necessary.`,
          subtitle: "#2 Design sprints are great",
          design: {
            background: require("@/assets/img/blog-details/blog-3.png"),
          },
          show: false,
          listShow: true,
          filter: ["Building", "Architecture", "Bedroom"],
          filterList: true,
        },
        {
          title: "#3 Let’s Get Solution for Building Construction Work",
          img: {
            background: require("@/assets/img/blog-details/blog-3.png"),
          },
          info: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                      to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
                      have suffered alteration in some form, by injecthumour, or randomised words which don't look even
                      slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                      the Internet tend to repeat predefined chunks as necessary.`,
          subtitle: "#3 Design sprints are great",
          design: {
            background: require("@/assets/img/blog-details/blog-1.png"),
          },
          show: false,
          listShow: true,
          filter: ["Kitchen Planning", "Bedroom", "Kitchen"],
          filterList: true,
        },
      ],
    };
  },
  methods: {
    showDetails(index) {
      this.blogArrs[index].show = !this.blogArrs[index].show;
      for (let i = 0; i < this.blogArrs.length; i++) {
        this.blogArrs[i].listShow = !this.blogArrs[i].listShow;
      }
      this.blogArrs[index].listShow = true;
    },
    filterList(info) {
      this.blogArrs.forEach((element, index) => {
        if (!element.filter.includes(info)) {
          this.blogArrs[index].filterList = false;
        } else {
          this.blogArrs[index].filterList = true;
        }
      });
    },
  },
};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.blog-details-bg {
  background: url(@/assets/img/blog-details/bg.jpg);
  height: 351px;
  width: 100%;
}

.articles-blog {
  padding: 200px 0 96px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 53px;
  }
}

.blog-list {
  width: 799px;
  flex-shrink: 0;
}

.blog-item {
  margin-bottom: 35px;

  &__title {
    font-size: 50px;
    margin-bottom: 11px;
  }

  &__img {
    width: 100%;
    height: 539px;
    background: url(@/assets/img/blog-details/blog-1.png) center/ cover
      no-repeat;
    border-radius: 50px;
    margin-bottom: 46px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
  }

  &__date {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
  }

  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    line-height: 150%;
  }

  &__breadcrumb-right {
    margin-right: 60px;
  }
}

.breadcrumb__link__small {
  color: #4d5053;
  font-family: $jost;
  font-size: 16px;
}

.tags {
  &__title {
    font-size: 25px;
    margin-bottom: 33px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__button {
    font-family: $jost;
    font-size: 18px;
    border-radius: 10px;
    background: #f4f0ec;
    padding: 9px 30px;

    &:hover {
      background: #292f36;
      color: #fff;
      transition: all 0.5s;
    }
  }
}

.blog-details {
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 267px;
    border-radius: 50px;
    background: #f4f0ec;
    color: #cda274;
    margin-bottom: 27px;
  }

  &__info-limiter {
    height: 63px;
    display: flex;
    align-items: flex-end;
  }

  &__info-symbol {
    font-size: 200px;
    text-align: center;
  }

  &__info-text {
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
  }

  &__title {
    font-size: 50px;
    margin-bottom: 20px;
  }

  &__text {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    margin-bottom: 24px;
    line-height: 150%;
  }

  &__item {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    margin-bottom: 32px;
    line-height: 150%;
  }

  &__img {
    background: url(@/assets/img/blog-details/blog-2.png) center/cover no-repeat;
    width: 100%;
    height: 365px;
    border-radius: 50px;
    margin-bottom: 35px;
  }
}
</style>
