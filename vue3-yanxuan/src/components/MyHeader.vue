<template>
  <div class="my-header w">
    <div class="header-top">
      <h1 class="logo">
        <router-link to="/"></router-link>
      </h1>
      <div class="center">
        <div class="center-search">
          <input type="text" placeholder="618..." />
          <button class="search-btn">搜索</button>
        </div>
        <!--搜索导航-->
        <ul class="center-navs">
          <li><a href="#">美食</a></li>
          <li><a href="#">餐厨</a></li>
          <li><a href="#">艺术</a></li>
          <li><a href="#">电器</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">洗护</a></li>
          <li><a href="#">孕婴</a></li>
          <li><a href="#">服装</a></li>
          <li><a href="#">杂货</a></li>
        </ul>
      </div>

      <div class="cart">
        <a href="##">
        <i class="iconfont icon-gouwuche-tianchong"></i>
        购物车
        <em>2</em>
      </a>
      </div>
    </div>
    <!--商品导航-->
    <AppHeaderNav/>
  </div>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue';
import { useStore } from 'vuex';
export default {
  components: {
    AppHeaderNav
  },
  setup(props) {
    const store = useStore();
    //触发action
    store.dispatch('category/getAllCategory');
  },
};
</script>

<style lang="less" scoped>
.my-header {
  position: relative;
  left: 100px;
  height: 120px;
  background-color: #fff;
  padding: 25px 0 0 0;
  .header-top {
    display: flex;
    .logo {
      
      width: 330px;
      height: 60px;
      a {
        display: inline-block;
        height: 60px;
        width: 100%;
        background: url(../assets/images/logo.webp) 0 -298px no-repeat;
      }
    }
    .center {
      
      .center-search {
        width: 540px;
        height: 35px;
        input {
          width: 440px;
          height: 35px;
          box-sizing: border-box;
          border: 1px solid @xtxColor;
          border-radius: 20px 0 0 20px;
          padding-left: 15px;

        }
        .search-btn {
          width: 100px;
          height: 35px;
          font-size :16px;
          float: right;
          background-color: @xtxColor;
          color: #fff;
          border-radius: 0px 20px 20px 0px;
          border: none;
          cursor: pointer;
        }
      }
      .center-navs {
        width: 540px;
        li{
          float:left;
          height: 32px;
          padding: 5px ;
          a{
            padding: 0 5px;
            border-right: 1px solid #ccc;
            &:hover{
              color: @xtxColor;
            }
          }
         
        }
        li:last-child{
            a{
              border-right: none;
            }
          
        }
      }
    }
    .cart {
      position: relative;
      left: 50px;
      box-sizing: border-box;
      width: 150px;
      height: 35px;
      line-height: 32px;
      border-radius: 20px;
      border:1px solid @xtxColor;
      font-size: 16px;
      text-align: center;
      i{
        color: @xtxColor; 
      }
      em{
        background-color:red;
        border-radius: 50%;
        padding: 0 5px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>