<template>
  <div class="head-city">
    <i class = "el-icon-location"></i>
    {{city}}
    <nuxt-link to="/changeCity" class="head-changcity">
      切换城市
    </nuxt-link>
    [厦门 集美区 集美大道]
  </div>
</template>
<!--<script type="text/javascript"
        src="http://api.map.baidu.com/api?v=2.0&ak=bFAgzCdGaFxkCtnZHf9OOK9dkgP2A5rw">

</script>-->
<script>
  export default {
    data (){
      return {
        city:""
      }
    },
    mounted (){
      let myCity = new BMap.LocalCity()
      let that = this
      myCity.get( result => {
        console.log(result)
        that.city = result.name
      })
      console.log('this.city==='+this.city)
    }
  }
</script>

<style  scoped>
.head-changcity {
  color: deepskyblue;
}
</style>
