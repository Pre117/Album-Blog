<template>
  <div>
    <div id="sign">
      <div class="select-button">
        <el-button @click="changeLogin">sign in</el-button>
        <el-button @click="changeRegister">sign up</el-button>
      </div>
      <!-- 用户注册 -->
      <div v-if="isRegister" class="register-wrap">
        <span class="wrap-title">用户注册</span>
        <div class="username">
          <el-input
            v-model="username"
            class="el-input-username"
            placeholder="请输入用户名"
          ></el-input>
        </div>
        <div class="password">
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <div class="email">
          <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        </div>
        <el-button type="primary" @click="register" plain>注册</el-button>
      </div>
      <!-- 用户登录 -->
      <div v-if="isLogin" class="login-wrap">
        <span class="wrap-title">用户登录</span>
        <div class="username">
          <el-input
            v-model="username"
            class="el-input-username"
            placeholder="请输入用户名/邮箱"
          ></el-input>
        </div>
        <div class="password">
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <el-button type="primary" @click="login" plain>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import baseUrl from '~/plugins/baseUrl'
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      isLogin: true,
      isRegister: false,
    };
  },
  methods: {
    changeLogin() {
      this.isRegister = false;
      this.isLogin = true;
      this.resetArgs();
    },
    changeRegister() {
      this.isLogin = false;
      this.isRegister = true;
      this.resetArgs();
    },
    register() {
      const self = this;
      axios({
        // url: `${baseUrl}user/register`,
        url: "user/register",
        method: "POST",
        data: {
          username: self.username,
          password: self.password,
          email: self.email,
        },
      })
        .then(() => {
          self.$message({
            message: "注册成功",
            type: "success",
          });
          self.changeLogin();
        })
        .catch(() => {
          self.$message.error("注册失败");
        });
    },
    login() {
      const self = this;
      axios({
        // url: `${baseUrl}user/login`,
        url: "/user/login",
        method: "POST",
        data: {
          username: self.username,
          password: self.password,
        },
      })
        .then((res) => {
          self.$message({
            message: "登录成功",
            type: "success",
          });
          // console.log(res.data);
          let resData = {
            err: 0,
            msg: "登录成功",
            username: res.data[0],
            token: res.data[1],
            data: { title: `登陆成功，且token返回成功: ${res.data[1]}` },
          };

          // 同步vuex && cookie
          self.$cookies.set("user", resData);
          // console.log(self.$cookies.get('user'))
          self.$store.commit("user/M_UPDATE_USER", resData);

          if (!self.$route.query.path || /sign/.test(self.$route.query.path)) {
            self.$router.replace("/");
          } else {
            self.$router.replace(this.$route.query.path);
          }
        })
        .catch((err) => {
          // console.log(err.response.data)
          self.$message.error(err.response.data);
        });
    },
    resetArgs() {
      this.username = "";
      this.password = "";
      this.email = "";
    },
  },
};
</script>

<style lang="less">
.el-input {
  width: 300px;
}
#sign {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  min-height: 500px;
  .select-button {
    margin-bottom: 20px;
    .el-button {
      width: 172px;
      margin-left: 0;
    }
  }
  .register-wrap {
    width: 350px;
    height: 500px;
    background-color: rgb(218, 255, 255);
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    // align-content: space-around;
    flex-flow: column wrap;
    .wrap-title {
      font-size: 24px;
      padding-bottom: 20px;
    }

    div {
      .el-input {
        margin-top: 30px;
        width: 300px;
      }
    }
    .el-button {
      margin-top: 30px;
      width: 300px;
    }
  }
  .login-wrap {
    width: 350px;
    height: 500px;
    background-color: rgb(218, 255, 255);
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    // align-content: space-around;
    flex-flow: column wrap;
    .wrap-title {
      font-size: 24px;
      padding-bottom: 20px;
    }

    div {
      .el-input {
        margin-top: 30px;
        width: 300px;
      }
    }
    .el-button {
      margin-top: 30px;
      width: 300px;
      margin-bottom: 70px;
    }
  }
}
</style>