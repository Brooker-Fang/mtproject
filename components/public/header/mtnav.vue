<template>
  <nav>
    <el-row :gutter = "0" class="mt-head-nav">
      <el-col :offset = "8" :span = "4" class = "mt-head-nav-li">
        我的美团
        <div class="menu-hidden">
          <dl>
            <dt>
              <nuxt-link to="">我的订单</nuxt-link>
            </dt>
            <dt>
              <nuxt-link to="">我的收藏</nuxt-link>
            </dt>
            <dt>
              <nuxt-link to="">抵用券</nuxt-link>
            </dt>
            <dt>
              <nuxt-link to="">账户设置</nuxt-link>
            </dt>

          </dl>
        </div>
      </el-col>

      <el-col :span = "4" class = "mt-head-nav-li">
        手机app
      </el-col>
      <el-col :span = "4" class = "mt-head-nav-li">
        商家中心
        <div class="menu-hidden menu-hidden2">
          <dl>
            <dt>
              <nuxt-link to="">登录商家中心</nuxt-link>
            </dt>
            <dt>
              <nuxt-link to="">美团智能收银</nuxt-link>
            </dt>
            <dt>
              <nuxt-link to="">我想合作</nuxt-link>
            </dt>


          </dl>
        </div>
      </el-col>
      <el-col :span = "4" class = "mt-head-nav-li">
        网站导航
        <div class="menu-hidden menu-hidden3">
          <dl>
            <dt>
              酒店旅游
            </dt>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
          </dl>
          <dl>
            <dt>
              吃美食
            </dt>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
          </dl>
          <dl>
            <dt>
              看电影
            </dt>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
            <dd><nuxt-link to="">登录商家中心</nuxt-link></dd>
          </dl>
          <dl>
            <dt>
              手机应用
            </dt>
            <dd>
              <nuxt-link to="">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"/>
              </nuxt-link>

            </dd>
            <dd>
              <nuxt-link to="">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"/>
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="">
                <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"/>
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"/>
              </nuxt-link>
            </dd>

          </dl>
        </div>
      </el-col>

    </el-row>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .mt-head-nav {
    height: 49px;
    text-align: center;
    line-height: 49px;
  }
  .mt-head-nav a {
    color: 	#9D9D9D;
  }

  .mt-head-nav-li {
    text-align: center;
    position: relative;
  }
  .menu-hidden {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease-in-out;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    right: 0;
  }
  .menu-hidden2 {
    width: 150%;
    padding: 4%;
  }
  .menu-hidden3 {
    width: 1200px;

  }
  .menu-hidden dl dt {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 5px;

  }
  .menu-hidden a:hover {
    color: rgba(2,181,157,.85);
  }
  .menu-hidden3 dl{
    float: left;
    padding: 1%;
    text-align: center;
  }
  .menu-hidden3 dl:nth-child(1) {
    width: 26%;

  }
  .menu-hidden3 dl:nth-child(2) {
    width: 24%;
  }
  .menu-hidden3 dl:nth-child(3) {
    width: 16%;
  }
  .menu-hidden3 dl:nth-child(4) {
    width: 34%;
  }

  .menu-hidden3 dl dt{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: rgba(2,181,157,.85);
  }
  .menu-hidden3 dl dd {
    font-size: 12px;
    display: inline-block;
    width: 33.33%;
    height: 30px;
    line-height: 30px;
    float: left;
  }
  .menu-hidden3 dl:nth-child(2) dd{
    width: 50%;
  }
  .menu-hidden3 dl:nth-child(3) dd{
    width: 100%;
  }
  .menu-hidden3 dl:nth-child(4) dd {
    width: 25%;
    padding: 1%;
  }
  .menu-hidden3 dl:nth-child(4) dd a img {
    width: 60px;
    height: auto;
  }
  .menu-hidden3 dl dd a {
    height: 20px;
    line-height: 20px;
  }
  .mt-head-nav-li:hover {
    background-color: #fff;
  }
  .mt-head-nav-li:hover .menu-hidden {

    visibility: inherit;
    opacity: 1;
  }


</style>
