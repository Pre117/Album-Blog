<template>
  <header>
    <div class="title">
      <NuxtLink to="/">Chase Nevins</NuxtLink>
    </div>
    <div class="header-nav">
      <NuxtLink to="/">Album</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <Dropdown></Dropdown>
      <NuxtLink v-if="isLogin" to="/sign">sign</NuxtLink>
      <NuxtLink v-else to="/profile"
        ><el-avatar src="/images/2.jpg" alt="用户"></el-avatar
      ></NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "创建相册",
        },
        {
          value: "选项2",
          label: "发布博客",
        },
      ],
    };
  },
  computed: {
    isLogin() {
      if (this.$store.state.user.err === 2) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    toProfile() {
      console.log("111");
      // this.$router.replace('/profile')
    },
  },
};
</script>

<style lang="less">
.title {
  font-size: calc(1.2vw + 1rem);
  align-self: center;
  padding-left: 50px;
}

.header-nav {
  width: 240px;
  margin-right: 150px;
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-size: calc(0.1vw + 1rem);
  }
}
</style>