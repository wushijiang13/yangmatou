<template>
  <div class="page-box dis-flex-around" :focusable="false">
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
<style scoped>
.order-qt-code-box {
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order-qr-content {
  width: 500px;
  height: 50px;
  font-size: 40px;
  color: #fff;
  margin-bottom: 80px;
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
