<template>
  <div class="user-order-box" :focusable="false">
    <qt-text class="order-title" text="我的订单"></qt-text>
    <div class="order-qt-code-box">
      <qt-text class="order-qr-content" text="微信扫码查看订单/物流状态" :focusable="false"></qt-text>
      <div class="order-qr-color">
        <qt-qr-code class="order-qr-code" content="http://www.xxxx.com/" :optimize="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>
<style>
.user-order-box {
  width: 1920px;
  height: 1080px;
  background-color: #1b1f29;
  padding-left: 40px;
  padding-right: 40px;
}

.order-title {
  width: 300px;
  height: 50px;
  color: #fff;
  font-size: 44px;
  margin-top: 20px;
}

.order-qt-code-box {
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order-qr-content {
  width: 500px;
  height: 50px;
  font-size: 40px;
  color: #fff;
  margin-bottom: 120px;
}

.order-qr-color {
  width: 450px;
  height: 450px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.order-qr-code {
  width: 400px;
  height: 400px;
}
</style>
