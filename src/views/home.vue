<template>
  <div class="index-root-view-css">
    <!-- <headerBox>
      <template #header-left>
        <qt-button v-for="(item, index) in btnList" :iconStyle="{ width: '30px', height: '30px' }" :size="'small'"
          :class="index == 0 ? 'first-btn' : 'btn-space'" :style="{ width: '260px' }" :text="item.text"
          @click="item.clicks" round :focusIcon="item.focusIcon" :icon="item.icon" />
        <qt-button text="跳转test" round :size="'small'" @click="jumpTest()"></qt-button>
      </template>
</headerBox> -->
    <div class="home-main-box">
      <goodsTabsBanner :tabList="tabListData"></goodsTabsBanner>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from '@vue/runtime-core'
import { homeTypeList } from '../constant/index'
import { useESRouter } from '@extscreen/es3-router'
import goodsTabsBanner from '../components/goods-tabs/banner.vue'
import headerBox from '../components/header/headerBox.vue'
import search from '../assets/search.png'
import user from '../assets/user.png'
import searchFocus from '../assets/search-focus.png'
import userFocus from '../assets/user-focus.png'
import { responseType } from '../types/index'
import { getHomePartList } from '../api/index'
const tabListData: Array<any> = ref([]);
const router = useESRouter()

const jumpUser = () => {
  router.push({
    name: 'info',
  })
}
const jumpSearch = () => {
  router.push({
    name: 'search',
  })
}
// const btnList = ref([
//   {
//     text: '个人中心',
//     icon: user,
//     focusIcon: userFocus,
//     clicks: jumpUser,
//   },
//   {
//     text: '搜索',
//     icon: search,
//     focusIcon: searchFocus,
//     clicks: jumpSearch,
//   },
// ])
onMounted(() => {
  let params = {
    MerchantId: 504479847
  }
  // router.push({
  //   name: 'goodsDetail',
  //   params: {
  //     productid: 'p77177561'
  //   }
  // })
  getHomePartList(params).then(res => {
    tabListData.value = JSON.parse(res.body).parts.filter((item) => {
      return item['name']
    });
  })
})

</script>

<style scoped>
.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: black;
}


.qt-tabs-css {
  width: 1920px;
}

.home-main-box {
  width: 1920px;
  height: 1040px;
  margin-top: 40px;
  /* background-color: aqua; */
}

.home-nav-box {
  width: 1920px;
}
</style>
