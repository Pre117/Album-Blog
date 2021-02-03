<template>
  <div class="container">
    <Header id="header" />
    <Nuxt id="content" />
    <Footer id="footer" />
  </div>
</template>

<script>
export default {
  middleware({store, route, redirect, params, query}) {
    // console.log('middleware layouts')
    // redirect('/editBlog')
  }
}
</script>

<style lang="less">
@import "../assets/css";
.container {
  min-height: 100vh;
  position: relative;
  #header {
    height: 140px;
    display: flex;
    justify-content: space-between;
  }
  #content {
    padding-bottom: 280px;
  }
  #footer {
    z-index: 9999;
    position: absolute;
    bottom: 0px;
    width: 100%;

    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>