<template>
  <div class="detail">
    <div class="detail-header-box" :focusable="false">
      <qt-text class="detail-header-title" text="商品详情" :textSize="24"></qt-text>
      <qt-text class="detail-header-content" text="本服务由洋码头提供" :textSize="24"></qt-text>
    </div>
    <div class="detail-line" :focusable="false"></div>
    <div class="detail-mian-box">
      <div class="detail-left-box">
        <qt-list-view :makeChildVisibleClampBackward="50" class="detail-img-list" :listData="listDatas">
          <div :type="1" enableFlexStyle :focusable="true" class="detail-img-waterfall">
            <qt-image src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
              class="detail-img" />
            <div class="detail-img-count-box" :focusable="false">
              <qt-text class="detail-img-count" :autoWidth="true" :autoHeight="true" text="${count}" />
            </div>
          </div>
        </qt-list-view>

      </div>
      <div class="detail-right-box">
        <div class="goods-red-tips-box" :focusable="false">
          <qt-text class="goods-red-tips" :gravity="'center'" text="码头自营" />
        </div>
        <qt-text class="goods-title" :focusable="true" :lineSpacing="10" :ellipsizeMode="4"
          :gravity="'centerHorizontal'" :lines="2"
          :text="`${titleLeftText}La Mar/海蓝之谜 修复晶萃水乳套装 精粹水150ML+精粹乳125ml 修护加乘粹水150ML+精粹乳125ml 修护加乘乳125ml 修护加乘`" />
        <qt-grid-view ref="gridViewRef" class="grid-discount-box" :listData="discountList" :spanCount="4"
          :areaWidth="920">
          <div type="1" class="goods-discount-item">
            <qt-text class="goods-discount-text" :gravity="'center'" :autoWidth="true" :lines="1" text="${content}"
              :ellipsizeMode="2" />
          </div>
        </qt-grid-view>
        <qt-waterfall ref="waterfall" class="price-waterfall-box">
          <template #section>
            <div :type="1" class="goods-price-box">
              <qt-text class="goods-unit" :autoWidth="true" :autoHeight="true" text="￥"></qt-text>
              <qt-text class="goods-price-text" :autoWidth="true" :autoHeight="true" text="1075"></qt-text>
              <div class="goods-original-price-box">
                <qt-text class="delete-line" :autoWidth="true" text="原价 ￥ 1450"></qt-text>
                <qt-text class="goods-original-price-title" :autoWidth="true" :autoHeight="true" text="原价"></qt-text>
                <qt-text class="goods-original-price-unit" :autoWidth="true" :autoHeight="true" text="￥"></qt-text>
                <qt-text class="goods-original-price-text" :autoWidth="true" :autoHeight="true" text="1450"></qt-text>
              </div>
            </div>
          </template>
        </qt-waterfall>


        <qt-text class="goods-price-tips-text" text="商品价格已含进口税"></qt-text>
        <div class="goods-price-line" />
        <div v-for="item in serviceList" class="service-cell-box">
          <qt-image class="service-icon" :src="item.icon" />
          <qt-text class="service-title" :gravity="'center'" :text="item.title"></qt-text>
          <qt-text class="service-content" :gravity="'centerVertical|right'" :text="item.content"></qt-text>
        </div>
        <div class="buy-box" :focusable="false">
          <qt-button :focusable="true" round text="按OK键立即购买" @click="purchaseClick" :style="{
            backgroundColor: '#ff0000',
            width: '600px',
          }" :textStyle="{
            color: '#fff',
          }" />
        </div>
      </div>
    </div>
    <dialogs :is-show="purchaseShow">
      <div class="purchase-box">
        <div class="purchase-qr-color">
          <qt-qr-code ref="purchaseQrCodeRef" class="purchase-qr-code" content="http://www.xxxx.com/"
            :optimize="true" />
        </div>
        <qt-text class="purchase-qr-text" text="使用手机微信，扫码购买"></qt-text>
      </div>
    </dialogs>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import deliverys from '../../assets/detail/deliverys.png'
import guarantee from '../../assets/detail/guarantee.png'
import type { QTIWaterfall, QTWaterfallSection, QTWaterfall } from '@quicktvui/quicktvui3'
import { qtRef } from '@quicktvui/quicktvui3'
import dialogs from '../../components/dialog/index.vue'
const titleLeftText = ref("码              ")
const serviceList = ref([
  {
    icon: deliverys,
    title: '配送',
    content: '海外直邮'
  },
  {
    icon: guarantee,
    title: '保障',
    content: '洋码头自营 | 正品保障 | 发货快'
  }
])
const purchaseShow = ref(false)
const listDatas = qtRef();
const discountList = qtRef();
const waterfall = ref<QTIWaterfall>()
const initDetailImage = () => {
  let count = 6
  return new Array(count).fill(1).map((item, i) => {
    return {
      type: 1,
      focus: { enable: true, scale: 1.1, border: false },
      decoration: { top: 20 },
      count: `${i + 1}/${count}`
    }
  })
}
const initDiscountList = () => {
  return new Array(6).fill(1).map((item, i) => {
    return {
      type: 1,
      focus: { enable: true, scale: 1.1, border: false },
      decoration: { top: 20 },
      content: `满1999减${i + 10}元`,
      count: `${i + 1}/6`
    }
  })
}
const initDetailWaterPrice = () => {
  const waterfallData: QTWaterfall = {
    width: 920,
    height: 90,
  }
  waterfall.value?.init(waterfallData)

  const sectionList: Array<QTWaterfallSection> = []
  const section: QTWaterfallSection = {
    _id: '2',
    type: 1,
    itemList: [],
    style: {
      width: 920,
      height: 60,
    },
  }
  sectionList.push(section)
  waterfall.value?.setSectionList(sectionList)
}
const purchaseClick = () => {
  purchaseShow.value = true
}

onMounted(() => {
  listDatas.value = initDetailImage() //初始化数据
  discountList.value = initDiscountList() //初始化数据
  initDetailWaterPrice();
})
</script>
<style scoped>
.detail {
  width: 1920px;
  height: 1080px;
  background-color: black;
}

.detail-header-box {
  width: 1920px;
  padding-left: 40px;
  padding-right: 40px;
  color: white;
}

.detail-header-title {
  font-size: 36px;
  color: white;
  width: 1920px;
  height: 50px;
  margin-bottom: 4px;
  margin-top: 4px;
}

.detail-header-content {
  font-size: 26px;
  color: white;
  width: 1920px;
  height: 50px;
  margin-bottom: 2px;
}

.detail-line {
  width: 1920px;
  height: 1px;
  background-color: #C2C2C3;
}

.detail-mian-box {
  width: 1920px;
  display: flex;
  flex-direction: row;
  height: 1000px;
  padding-top: 4px;
}

.detail-left-box {
  width: 920px;
  background-color: #1f1d26;
}

.detail-img-list {
  width: 920px;
  height: 920px;
}

.detail-img-waterfall {
  width: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.detail-img {
  width: 800px;
  height: 800px;
  border-radius: 20px;
}

.detail-img-count-box {
  border-radius: 50px;
  /* height: 40px; */
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  right: 90px;
  bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 999;
}

.detail-img-count {
  font-size: 30px;
  color: white;
}

.detail-right-box {
  width: 920px;
  margin-left: 40px;
  margin-top: 40px;
  display: flex;
  /* flex-direction: row; */
}

.goods-red-tips-box {
  width: 170px;
  height: 50px;
  background-color: #c93729;
  border-radius: 50px;
  margin-top: 4px;
  margin-left: 4px;
  position: absolute;
  z-index: 999;
}

.goods-red-tips {
  font-size: 32px;
  height: 50px;
  color: #fff;
  width: 170px;
  display: inline-block;
}

.goods-title {
  color: white;
  font-size: 38px;
  width: 920px;
  height: 100px;
  line-height: 50px;
}

.price-waterfall-box {
  width: 920px;
  height: 90px;
  display: flex;
  margin-top: 4px;
  /* background-color: aqua; */
}

.grid-discount-box {
  height: 60px;
  /* background-color: antiquewhite; */
}

.goods-discount-item {
  background-color: #3d0f19;
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
  /* 
   */
  /* padding-bottom: 4px; */
  /* width: 230px; */
  display: flex;
  align-items: center;
  justify-content: center
}

.goods-discount-text {
  color: white;
  font-size: 28px;
  /* width: 210px; */
  height: 40px;
}

.goods-price-box {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 20px;
  position: relative;
}

.goods-unit {
  font-size: 24px;
  color: #ff0000;
  margin-bottom: 14px;
}

.goods-price-text {
  font-size: 60px;
  width: 150px;
  height: 70px;
  line-height: 70px;
  color: #ff0000;
}

.goods-original-price-box {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 14px;
}

.delete-line {
  background-color: #fff;
  height: 2px;
  position: absolute;
  top: 22px;
}

.goods-original-price-title {
  color: white;
  font-size: 26px;
  margin-top: 2px;
}

.goods-original-price-unit {
  font-size: 20px;
  color: white;
  margin-left: 14px;
  /* line-height: 30px; */
  margin-top: 10px;
}

.goods-original-price-text {
  font-size: 30px;
  color: white;
  /* line-height: 30px; */
  /* margin-top: 20px; */
}

.goods-price-tips-text {
  color: #C2C2C3;
  font-size: 26px;
  width: 290px;
  height: 40px;
  margin-top: 10px;
}

.goods-price-line {
  width: 920px;
  height: 1px;
  background-color: #C2C2C3;
  margin-top: 40px;
}


.service-cell-box {
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
}

.service-icon {
  width: 50px;
  height: 50px;
}

.service-title {
  font-size: 30px;
  color: white;
  width: 100px;
  height: 40px;
  margin-left: 20px;
}

.service-content {
  font-size: 30px;
  color: white;
  width: 500px;
  height: 40px;
  margin-left: 20px;
}

.buy-box {
  width: 920px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purchase-box {
  height: 660px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purchase-qr-color {
  width: 450px;
  height: 450px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.purchase-qr-code {
  width: 400px;
  height: 400px;
}

.purchase-qr-text {
  font-size: 32px;
  width: 360px;
  height: 40px;
  margin-top: 40px;
  color: #fff;
}
</style>
