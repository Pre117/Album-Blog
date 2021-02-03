<template>
  <div>
    <upload></upload>
    <pr-editor></pr-editor>
  </div>
</template>
<script>
import PREditor from "~/components/PREditor.vue";
import Upload from '~/components/Upload.vue';

export default {
  components: { Upload },
  data() {
    return {
      PREditor,
    };
  },

};
</script>

<style lang="less">

</style>