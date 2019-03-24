<template>
  <el-container>
    <el-header style="height: auto !important;">
      <mt-head></mt-head>
    </el-header>
    <el-main style="overflow: inherit">
      <nuxt/>
    </el-main>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</template>
<script>
  import mtHead from '~/components/public/header/index'

  export default {
    components: {
      mtHead
    }
  }
</script>
<style>

</style>
