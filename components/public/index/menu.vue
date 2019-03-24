<template>

  <div class="mt-index-menu">
    <dl class="mt-menu" @mouseleave="mouseleave">
      <dt >全部美食</dt>
      <dd v-for = "(item,index) in menuList"  :key="index" @mouseenter="mouseenter(item.type)">{{item.typeName}}</dd>
    </dl>
    <div class="mt-menu-detail"  v-if = "kind">
      <template  v-for="(item,index) in menuDetail.list" >
        <h4 :key="index">{{item.title}}</h4>
        <div class="mt-menu-detail-hr"></div>
        <span v-for="v in item.detail" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        kind:"",
        menuList:[
          {
            type:"food",
            typeName:"美食",
            icon:"",
            list:[
              {
                title:"美食",
                detail:['代金券','甜点','饮品','火锅','自助餐','小吃快餐','日韩料理','西餐','聚餐宴请','烧烤烤肉','东北菜','川湘菜']
              }
            ]
          },
          {
            type:"takeout",
            typeName:"外卖",
            icon:"",
            list:[
              {
                title:"外卖",
                detail:['美团外卖']
              }
            ]
          },
          {
            type:"hotel",
            typeName:"酒店",
            icon:"",
            list:[
              {
                title:"酒店星级",
                detail:['舒适/三星','高档/四星','豪华/五星']
              }
            ]
          },
          {
            type:"movie",
            typeName:"电影",
            icon:"",
            list:[
              {
                title:"热映电影",
                detail:['流浪地球','飞驰人生','疯狂外星人']
              },
              {
                title:"热门影院",
                detail:['美岁天地影院','大地影院']
              }
            ]
          },

        ]
      }
    },
    computed: {
      menuDetail (){

        return this.menuList.filter(item => item.type === this.kind)[0]
      }
    },
    methods: {
      mouseleave (){
        let that = this
        let timeout = setTimeout(function (){
          that.kind = ''
        },100)

      },
      mouseenter (kind){
        this.kind = kind
      }
    }
  }
</script>

<style scoped>
  .mt-index-menu {
    width: 230px;
    position: relative;
  }
  .mt-menu {
    width: 100%;
    background-color: rgba(2,181,157,.85);
    padding: 10px 0px;
    line-height: 30px;
    color: #fff;
    margin-top: -60px;
    z-index: 9;
    position: absolute;

  }
  .mt-index-menu dt {
    font-size: 16px;
    padding-left: 20px;
  }
  .mt-index-menu dd {
    padding: 0 30px;

  }
  .mt-index-menu dd:hover {
    background-color: rgba(2,181,155,.85);
  }

  .mt-menu-detail {
    background-color: #ffffff;
    position: absolute;
    width: 400px;
    height: 600px;
    left: 230px;
    height: 200px;
    line-height: 30px;
    top: -25px;
  }
  .mt-menu-detail h4 {
    padding: 5px 10px;
  }
  .mt-menu-detail-hr {
    width: 96%;
    background-color: #999;
    height: 1px;
    margin: 0 auto;
  }
  .mt-menu-detail span {
    display: inline-block;
    margin: 0 10px;
    font-size: 12px;
    color: #999;
  }

</style>
