<template>
  <div class="page-box" :focusable="false">
    <headerBox>
      <template #header-left>
        <qt-text gravity="top" class="header-title" text="全部记录"></qt-text>
      </template>
      <template #header-right>
        <qt-button class="btn-space" :size="'small'" round text="取消"></qt-button>
        <qt-button class="btn-space" :size="'small'" round text="一键清空"></qt-button>
      </template>
    </headerBox>
    <div>
      <qt-grid-view class="record-grid-box" @item-click="jumpDetail" :listData="listData" :spanCount="5">
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
const listData = qtRef()
const router = useESRouter()
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
        left: 30,
        bottom: 20,
        top: 20
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
.record-grid-box {
  height: 1080px;
  padding-left: 40px;
}
</style>
