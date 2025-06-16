<template>
  <div class="page-box">
    <HeaderBox>
      <template #header-left>
        <qt-text class="header-title" text="个人中心" :focusable="false"></qt-text>
      </template>
    </HeaderBox>
    <div class="user-header-box">
      <div class="login-box">
        <div class="login-left-box">
          <qt-image class="login-icon" :src="user"></qt-image>
        </div>
        <div class="login-right-box">
          <qt-text class="login-text" text="登录同步云端记录"></qt-text>
          <qt-button class="login-btn" round :size="'small'" text="立即登录"></qt-button>
        </div>
      </div>
      <div class="order-box" @click="jumpOrder" :focusable="true">
        <qt-text class="order-text" text="我的订单"></qt-text>
        <qt-image class="order-icon" :src="order"></qt-image>
      </div>
    </div>
    <qt-text class="browse-title" text="浏览记录" :focusable="false"></qt-text>
    <div class="browse-box">
      <goodsItem v-for="item in 5" @click="jumpDetail" :is-show-price="false" :size="'smail'" />
      <div class="browse-btn-box" @click="jumpRecord" :focusable="true">
        <qt-image class="browse-image" :src="time"></qt-image>
        <qt-text class="browse-text" text="全部记录"></qt-text>
      </div>
    </div>
    <qt-text class="browse-title" text="其他设置" :focusable="false"></qt-text>
    <div class="other-btn-box">
      <qt-button v-for="item in otherBtnList" style="width: 440px; line-height: 100px;" :focusBorder="false"
        size="large" :text="item.text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import goodsItem from '../../components/goods-item/index.vue'
import time from '../../assets/user/time.png'
import order from '../../assets/user/order.png'
import user from '../../assets/user.png'
import { useESRouter } from '@extscreen/es3-router'
import HeaderBox from 'src/components/header/headerBox.vue'
const router = useESRouter()
const otherBtnList = ref([
  {
    text: '相关信息',
  },
  {
    text: '联系客服',
  },
  {
    text: '用户协议',
  },
  {
    text: '隐私政策',
  }
])
const jumpDetail = () => {
  router.push({
    name: 'goodsDetail',
  })
}
const jumpOrder = () => {
  router.push({
    name: 'order',
  })
}
const jumpRecord = () => {
  router.push({
    name: 'record',
  })
}
</script>
<style>
.userinfo-title {
  width: 300px;
  height: 50px;
  color: #fff;
  font-size: 44px;
  margin-top: 20px;
}

.browse-title {
  width: 300px;
  height: 50px;
  color: #fff;
  font-size: 36px;
  margin-top: 20px;
}

.browse-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 320px;
  margin-top: 20px;
}

.browse-btn-box {
  width: 440px;
  height: 240px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  focus-border-style: solid;
  focus-border-color: #fff;
  focus-border-width: 2px;
  background-color: #21242f;
}

.browse-image {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}


.browse-text {
  width: 140px;
  font-size: 34px;
  height: 50px;
  color: #fff;
}

.other-btn-box {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.other-btn {
  width: 300px;
  height: 80px;
}

.user-header-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
}

.login-box {
  width: 640px;
  height: 310px;
  border-radius: 20px;
  background-color: #21242f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.login-left-box {
  width: 170px;
  height: 170px;
  border-radius: 100px;
  background-color: #2d303b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-icon {
  width: 70px;
  height: 70px;
}

.login-right-box {
  height: 200px;
  width: 360px;
  margin-left: 40px;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-left: 20px;
}

.login-text {
  width: 280px;
  height: 50px;
  font-size: 34px;
  color: #fff;
}

.login-btn {
  margin-top: 20px;
}

.order-box {
  width: 1140px;
  height: 310px;
  border-radius: 20px;
  background-color: #21242f;
  focus-border-style: solid;
  focus-border-color: #fff;
  focus-border-width: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.order-icon {
  width: 80px;
  height: 80px;
  margin-top: 20px;
}

.order-text {
  width: 140px;
  font-size: 34px;
  height: 50px;
  color: #fff;
}
</style>
