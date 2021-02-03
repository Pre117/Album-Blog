<template>
  <div>
    <input type="file" @click="upload" />
  </div>
</template>

<script>
export default {
  methods: {
    upload(event) {
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
  },
};
</script>

<style>
</style>