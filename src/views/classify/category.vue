<template>
  <div class="page-box" :focusable="false">
    <headerBox>
      <template #header-left>
        <qt-button v-for="(item, index) in btnList" :class="index == 0 ? 'first-btn' : 'btn-space'" :size="'small'"
          round :text="item.text" @click="item.click" :focusIcon="item.focusIcon" :icon="item.icon" />
      </template>
    </headerBox>
    <qt-text class="category-title" text="精致护肤" />
    <div>
      <qt-grid-view class="category-grid-box" @item-click="jumpDetail" :listData="listData" :spanCount="5">
        <goodsItem type="1" text="123"></goodsItem>
      </qt-grid-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import headerBox from 'src/components/header/headerBox.vue';
import goodsItem from 'src/components/goods-item/index.vue'
import { onMounted } from 'vue'
import { useESRouter } from '@extscreen/es3-router'
import { qtRef } from '@quicktvui/quicktvui3'
import search from '../../assets/search.png'
import searchFocus from '../../assets/search-focus.png'
import home from '../../assets/home.png'
import homeFocus from '../../assets/home-focus.png'
const listData = qtRef()
const router = useESRouter()
const btnList = [
  {
    text: '搜索',
    icon: search,
    focusIcon: searchFocus,
    click: () => {
      router.push({
        name: 'search',
      })
    }
  },
  {
    text: '首页',
    icon: home,
    focusIcon: homeFocus,
    click: () => {
      router.push({
        name: 'home',
      })
    }
  }
]
onMounted(() => {
  listData.value = mockData() //初始化数据
  console.log(listData.value)
})
// 模拟数据
const mockData = () => {
  return new Array(20).fill(1).map((item, i) => {
    return {
      text: i + '',
      type: 1,
      decoration: {
        left: 10,
        bottom: 20,
        top: 10
      },
      goodsIcon: "https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      goodsName: "超级好用的商品 快来买呀",
      goodsPrice: 1233,
      goodsNewPrice: 222,
      style: {
        width: 300,
        height: 370,
      }
    }
  })
}

const jumpDetail = () => {
  router.push({
    name: 'goodsDetail',
  })
}
</script>
<style scoped>
.category-title {
  font-size: 40px;
  width: 800px;
  height: 54px;
  margin-bottom: 10px;
  color: #fff;
}

.category-grid-box {
  height: 900px;
}
</style>
