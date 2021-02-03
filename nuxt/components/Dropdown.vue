<template>
  <div class="dropdown">
    <span>发布</span>
    <div class="dropdown-content">
      <NuxtLink to="/uploadImg" class="el-icon-plus">建相册</NuxtLink>
      <NuxtLink to="/editBlog" class="el-icon-edit">写文章</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.dropdown {
  position: relative;
  display: inline-block;
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 75px;
    left: -30px;
    top: 20px;
    border-radius: 4px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    a {
      display: block;
      padding: 10px 0;
    }
  }
}

.dropdown:hover {
  .dropdown-content {
    display: block;
  }
}
</style>