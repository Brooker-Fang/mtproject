<template>
  <el-row :gutter="0"  >

    <el-col :offset = "1" :span="6" class="mt-head-top">
      <city></city>
    </el-col>
    <el-col :span="6" class="mt-head-top">
      <user></user>
    </el-col>
    <el-col :span="10" >
      <mt-nav></mt-nav>
    </el-col>
  </el-row>
</template>

<script>
  import city from './city'
  import mtNav from './mtnav'
  import user from './user'
  export default {
    components: {
      city,mtNav,user
    }
  }
</script>

<style scoped>
div,a,ul,li,dd,dl,dt {
  color: 	#9D9D9D;
}
.mt-head-top {

  padding: 15px 0;
}
</style>
