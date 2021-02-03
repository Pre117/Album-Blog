<template>
  <div>
    <!-- <input type="file" @change="uploadFilds" />
    <el-button @click="change">base64</el-button> -->
    <el-upload
      list-type="picture-card"
      action="''"
      :http-request="upload"
      :before-upload="beforeAvatarUpload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script>
import { uploadFilds } from "@/api";
import base64 from "~/plugins/base64";
export default {
  methods: {
    async uploadFilds(event) {
      // 拿到 input 的 files 对象
      const files = event.target.files;
      const formDate = new FormData();
      // 遍历对象中的每一个文件，并逐一添加到 formDate 实例对象中
      for (let file of Object.values(files)) {
        formDate.append("avatar", file);
      }
      //
      let self = this;
      this.$axios({
        url: "/blog/upload",
        method: "POST",
        data: formDate,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    change() {
      var img = "/images/1.jpg"; //imgurl 就是你的图片路径

      function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
        var dataURL = canvas.toDataURL("image/" + ext);
        return dataURL;
      }

      var image = new Image();
      image.src = img;
      image.onload = function () {
        var base64 = getBase64Image(image);
        console.log(base64);
      };
    },
    beforeAvatarUpload(file) {
      
    },
  },
};
</script>

<style>
.el-upload {
  width: 500px;
}
</style>