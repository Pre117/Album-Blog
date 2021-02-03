<template>
  <div id="preditor">
    <div class="buttons">
      <button type="button" @click="execCommand('undo')" class="undo"></button>
      <button type="button" @click="execCommand('redo')" class="redo"></button>
      <button type="button" @click="execCommand('formatBlock', '<h1>')" class="h1"></button>
      <button type="button" @click="execCommand('formatBlock', '<h2>')" class="h2"></button>
      <button type="button" @click="execCommand('formatBlock', '<h3>')" class="h3"></button>
      <button type="button" @click="execCommand('formatBlock', '<h4>')" class="h4"></button>
      <button type="button" @click="execCommand('formatBlock', '<h5>')" class="h5"></button>
      <button type="button" @click="execCommand('bold')" class="bold"></button>
      <button type="button" @click="execCommand('italic')" class="italic"></button>
      <button type="button" @click="execCommand('insertorderedList')" class="ordered"></button>
      <button type="button" @click="execCommand('insertUnorderedList')" class="bullet"></button>
      <button type="button" @click="execCommand('justifyLeft')" class="left"></button>
      <button type="button" @click="execCommand('justifyCenter')" class="center"></button>
      <button type="button" @click="execCommand('justifyRight')" class="right"></button>
      <button type="button" @click="execCommand('justifyFull')" class="justify"></button>
      <button type="button" @click="execCommand('insertHorizontalRule')" class="divide"></button>
    </div>
    <div
      contenteditable="true"
      autocomplete="off"
      autocorrect="off"
      spellcheck="false"
      class="input-area"
    >
      测试文字
    </div>
    <el-button type="primary" class="publish" @click="publish" plain>发布文章</el-button>
  </div>
</template>

<script>
import axios from 'axios';
import SvgIcon from "./SvgIcon.vue";
export default {
  components: { SvgIcon },
  data() {
    return {
      inputHtml: ''
    }
  },
  methods: {
    execCommand(name, args = null) {
      document.execCommand(name, false, args)
    },
    publish() {
      let self = this
      this.inputHtml = document.getElementsByClassName('input-area')[0].innerHTML
      console.log(this.inputHtml)
      this.$axios({
        url: '/blog/publish',
        method: 'POST',
        data: {
          content: this.inputHtml
        }
      }).then(res => {
        self.$message({
          message: '发布成功',
          type: 'success'
        })
        self.$router.replace("/blog");
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="less">
@import '@/assets/css/editorIcon';
#preditor {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column wrap;
  background-color: rgba(240, 240, 240, 1);
  padding: 60px 0;
  .buttons {
    width: 40em;
    min-height: 30px;
    align-self: center;
    padding: 10px;
    border: 1px solid rgb(34, 143, 170);
    background-color: rgba(240, 240, 240, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
  }
  .input-area {
    align-self: center;
    background-color: #fff;
    outline: none;
    min-height: 1000px;
    width: 816px;
    padding: 50px;
    margin-bottom: 20px;
    border-radius: 4px;
    // border: 1px solid red;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>