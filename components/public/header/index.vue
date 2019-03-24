<template>
  <div class="m-header-index">
    <el-row>
      <el-col>
        <top-bar/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar/>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import topBar from './topbar'
  import searchBar from './searchbar'
  export default {
      components: {
        topBar,searchBar
      }
  }
</script>

<style scoped>
.m-header-index {
  width: 100%;
}
</style>
