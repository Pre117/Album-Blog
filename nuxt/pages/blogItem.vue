<template>
  <div class="blog-item-container">
    <div class="title">
      <time class="title-time">{{}}</time>
      <h1 class="title-blogName">{{}}</h1>
    </div>
    <el-image :src="$route.params.url" class="blog-img"></el-image>
    <div class="text">
      <p>
        {{ this.id }}
      </p>
      <button @click="getData">点击获取后台数据</button>
      <div v-for="(item, index) in myDa" :key="index">
        {{ item.name }}
      </div>
      
    </div>
    <div class="another-item"></div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      myData: {},
      result: false
    };
  },
  computed: {
    myDa: {
      get: function () {
        return this.myData;
      },
    },

    
  },
  methods: {
    getData() {
      const self = this;
      axios({
        url: "http://localhost:3001/",
        method: "GET",
        data: null,
      })
        .then(function (res) {
          console.log(res.data);
          self.myData = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    
  },
  created() {
    //blog页面点击NuxtLink通过query传参
    this.id = this.$route.query.id;
  },
};
</script>

<style lang="less">
.blog-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column wrap;
    height: 147px;
    margin: 46px 0 50px;
    .title-time {
      font-size: calc((1 - 1) * 1.2vw + 1rem);
      font-weight: 400;
      line-height: 1em;
    }
    .title-blogName {
      font-size: calc((4 - 1) * 1.2vw + 1rem);
      font-weight: 500;
      line-height: 1.4em;
    }
  }
  .blog-img {
    width: 1070px;
    height: 856px;
  }
}
</style>