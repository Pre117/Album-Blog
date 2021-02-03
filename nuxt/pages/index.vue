<template>
  <div class="parent">
    <div v-for="item in imgList" :key="item.id" class="wrap">
      <el-image :src="item.url" class="img"></el-image>
      <NuxtLink to="/">{{ item.albumName }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: "1",
          url: "/images/1.jpg",
          albumName: "长沙",
        },
        {
          id: "2",
          url: "/images/2.jpg",
          albumName: "长沙",
        },
        {
          id: "3",
          url: "/images/3.jpg",
          albumName: "长沙",
        },
        {
          id: "4",
          url: "/images/4.jpg",
          albumName: "长沙",
        },
        {
          id: "5",
          url: "/images/5.jpg",
          albumName: "长沙",
        },
        {
          id: "6",
          url: "/images/6.jpg",
          albumName: "长沙",
        },
      ],

      items: [
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
        { message: "Foo" },
      ],
    };
  },
};
</script>

<style lang="less">
.parent {
  width: 100%;
  box-sizing: border-box;
  padding: 55px 32px;
  display: flex;
  flex-flow: row wrap;
  align-content: space-around;
  justify-content: space-around;
  .wrap {
    display: flex;
    flex-direction: column;
    .img {
      list-style: none;
      width: 449px;
      height: 449px;
      margin: 10px;
    }
    a {
      text-align: center;
      font-size: calc((1.6 - 1) * 1.2vw + 1rem);
      margin-bottom: 13.53px;
      padding-bottom: 30px;
    }
  }
}
</style>


