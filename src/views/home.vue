<template>
  <div class="index-root-view-css">
    <!-- <qt-image class="index-root-logo-css" :src="logo"></qt-image> -->
    <div class="home-header-box">
      <div class="home-header-left-box">
        <qt-button text="个人中心" @click="jumpUser" round :size="'small'" :focusIcon="userFocus" :icon="user"></qt-button>
        <qt-button text="搜索" round :size="'small'" :focusIcon="searchFocus" :icon="search"></qt-button>
        <qt-button text="跳转test" round :size="'small'" @click="jumpTest()"></qt-button>
      </div>
    </div>
    <div class="home-main-box">
      <goodsTabsBanner :tabList="tabListData"></goodsTabsBanner>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  QTITab,
  QTINavBar,
} from '@quicktvui/quicktvui3'

import { ref, onMounted } from '@vue/runtime-core'
import { homeTypeList } from '../constant/index'
import { useESRouter } from '@extscreen/es3-router'
import goodsTabsBanner from '../components/goods-tabs/banner'
import search from '../assets/search.png'
import user from '../assets/user.png'
import searchFocus from '../assets/search-focus.png'
import userFocus from '../assets/user-focus.png'
const tabListData: Array<any> = ref(homeTypeList);
const router = useESRouter()

const jumpTest = () => {
  console.log("router", router)
  router.push({
    name: 'test',
  })
}

const jumpUser = () => {
  router.push({
    name: 'info',
  })
}
onMounted(() => {

  // initNavBar()
  // swiperRef.value?.initialPage()
})

</script>

<style>
.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: black;
}

.home-header-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 120px;
}

.home-header-left-box {
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.qt-tabs-css {
  width: 1920px;
}

.home-main-box {
  width: 1920px;
  height: 600px;
}

.home-nav-box {
  width: 1920px;
}
</style>
