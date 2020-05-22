<template>
  <div class="navigation">
    <div class="navigation-content">
      <div class="navigation-1">
        <img src="@/assets/componts/com-1.png" alt />
      </div>
      <ul class="navigation-2">
        <router-link class="navigation-2a" to="/" tag="li">首页</router-link>
        <router-link class="navigation-2a" to="/personnel" tag="li">人员组成</router-link>
        <li class="navigation-2a">活动介绍</li>
        <li class="navigation-2a">联系我们</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 81px;
  background-color: white;
  z-index: 999;
  .navigation-content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    .navigation-1 {
      width: 100px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .navigation-2 {
      display: flex;
      justify-content: space-around;
      .navigation-2a {
        width: 100px;
        height: 80px;
        font-size: 16px;
        color: #adadad;
        line-height: 80px;
      }
    }
  }
}
</style>