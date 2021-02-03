<template>
  <div>
    <div id="profile">
      <el-button @click="logout">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    logout() {
      this.A_UPDATE_USER({
        err: 2,
        msg: '未登录',
        username: '',
        token: '',
        data: {}
      })
      this.$cookies.remove('user')

      this.$router.replace('/sign')
    },
    ...mapActions('user', ['A_UPDATE_USER'])
  },
};
</script>

<style lang='less'>
#profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>