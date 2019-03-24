<template>
  <section class="container">
    <el-row :gutter="0">
      <el-col :offset = "2" :span="6">
        <Emenu/>
      </el-col>
      <el-col :span="16">2</el-col>
    </el-row>
    <el-row>
      3
    </el-row>
  </section>
</template>

<script>
import Emenu from '@/components/public/index/menu'

export default {
  components: {
    Emenu
  }
}
</script>

<style>

</style>
