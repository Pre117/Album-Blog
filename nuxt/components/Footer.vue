<template>
  <footer>
    <div class="footer-nav">
      <NuxtLink to="/">Album</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
      <p>
        Made with
        <NuxtLink to="/">Pre117</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer-nav {
  a {
    font-size: calc((1.6 - 1) * 1.2vw + 1rem);
    padding: 8px;
  }
  p {
    margin-top: 30px;
    text-align: center;
    a {
      font-size: calc((1 - 1) * 1.2vw + 1rem);
      text-decoration: underline;
    }
  }
}
</style>