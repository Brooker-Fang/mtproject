<template>
  <div class="mt-searchbar">
    <el-row>
      <el-col :offset = "2" :span="5">
        <img class="mt-searchbar-img" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="16" class="center">
        <el-input
          v-model = "search"
          placeholder = "请输入内容"
          class ="mt-searchbar-input"
          @focus = "onFocus"
          @blur = "blur"
          clearable>
        </el-input><el-button type = "primary" icon = "el-icon-search" class = "mt-searchbar-button"></el-button>
        <dl v-if = "isHotSearch" class = "hasinput">
          <dt>热门搜索</dt>
          <dd v-for= "(item,index) in hotSearch" :key = "item">{{item}}</dd>

        </dl>
        <dl v-if = "isSearchList" class = "searchlist">

          <dd v-for= "(item,index) in hotSearch" :key = "item">{{item}}</dd>

        </dl>
        <dl  class = "hotsearch">

          <dd v-for= "(item,index) in hotSearch" :key = "item">{{item}}</dd>

        </dl>
        <dl  class = "searchbarnav">

          <dd v-for= "(item,index) in searchBarNav" :key = "item">{{item}}</dd>

        </dl>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        search:"",
        isFocus:false,

        hotSearch:['鼓浪屿','方特梦幻王国','湖里山炮台','中华城','星空魔幻城','菽庄花园'],
        searchList:['鼓浪屿','方特梦幻王国','湖里山炮台','中华城','星空魔幻城','菽庄花园'],
        searchBarNav:['美团外卖','猫眼电影','美团酒店','民宿／公寓','商家入驻','美团公益']
      }
    },
    computed: {
      isHotSearch (){
        return this.isFocus && !this.search
      },
      isSearchList (){
        return this.isFocus && this.search
      }
    },
    methods: {
      onFocus (){
        this.isFocus = true

      },
      blur (){
        this.isFocus = false
      }
    }
  }
</script>

<style scoped>
  .mt-searchbar {
    background-color: #fff;
    padding: 30px 30px 0 30px;
    color:#999
  }
  .mt-searchbar-img {
    width: 126px;
    height: auto;
  }
  .mt-searchbar-input {
    width: 54%;
    position: relative;
  }
  .mt-searchbar-button {
    background-color: rgba(2,181,157,.85);
    margin-left: 1px;
    width: 70px;
  }
  .hasinput,.searchlist {
    position: absolute;
    width:  36%;
    background-color: #fff;
    line-height: 30px;
    padding: 10px;
  }
  .hasinput dd,.hotsearch dd{
    display: inline-block;
    margin-right: 10px;
    line-height: 20px;

  }
  .hotsearch {
    padding: 10px;
    width: 54%;
  }

  .searchbarnav dd {
    display: inline-block;
    margin: 0 20px;
    line-height: 40px;
    font-weight: 700;
    color: #333333;
    font-size: 16px;

  }
  .searchbarnav dd:nth-child(1) {
    margin: 0 20px 0 0px;
  }
</style>
