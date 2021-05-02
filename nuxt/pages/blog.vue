<template>
  <div>
    <div class="blog-content-wrap">
      <span>Love Stories</span>
    </div>
    <div class="blog-parent">
      <div v-for="item in blogList" :key="item.id" class="blog-wrap">
        <img :src="item.imgUrl" class="blog-img">
        <div class="blog-wrap-text">
          <time class="blog-date">{{ item.createdTime }}</time>
          <NuxtLink
            :to="'blogItem?id=' + item.id"
            class="blog-title"
          >
            {{ item.blogTitle }}
          </NuxtLink>
          <NuxtLink to="/" class="blog-readMore">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      blogList: [
        {
          id: 1,
          imgUrl: "/blogImg/1.jpg",
          blogTitle: "",
          createdTime: "1/18/21",
        },
        {
          id: 2,
          imgUrl: "/blogImg/2.jpg",
          blogTitle: "",
          createdTime: "1/18/21",
        },
        {
          id: 3,
          imgUrl: "/blogImg/3.jpg",
          blogTitle: "",
          createdTime: "1/18/21",
        },
        {
          id: 4,
          imgUrl: "/blogImg/4.jpg",
          blogTitle: "",
          createdTime: "1/18/21",
        },
      ],
    };
  },
  async asyncData({$axios}) {
    let res = await $axios({url: '/blog/showall'})
    console.log(res.data)
    return {
      fileList: res.data
    }
  }
};
</script>

<style lang="less">
.blog-content-wrap {
  width: 100%;
  height: 156px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: calc(1.8 * 1.2vw + 1rem);
  }
}

.blog-parent {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 30px 20px;
  .blog-img {
    width: 700px;
    height: 460px;
  }
  .blog-wrap-text {
    height: 170px;
    margin: 65px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column wrap;
    .blog-date {
      font-size: calc((1 - 1) * 1.2vw + 1rem);
    }
    .blog-title {
      margin: 20px 0;
      font-size: calc((2.2 - 1) * 1.2vw + 1rem);
      font-weight: 500;
    }
    .blog-readMore {
      font-size: calc((0.9 - 1) * 1.2vw + 1rem);
      font-weight: 300;
      line-height: 1.8em;
      text-decoration: underline;
    }
  }
}
</style>