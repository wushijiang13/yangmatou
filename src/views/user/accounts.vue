<template>
  <div :focusable="false">
    <div class="accounts-box">
      <qt-image :src="bg" class="accounts-bg-image"></qt-image>
      <qt-image class="accounts-portrait"
        src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750" />
      <qt-image class="accounts-wx-logo" :src="wx" />
      <qt-text class="accounts-name" text="试试名字是是是斯哈斯哈斯" />
      <div class="accounts-btn-box">
        <qt-button v-for="item in btnList" style="width: 250px;" :focusIcon="item.focusIcon" :icon="item.icon"
          size="small" round :text="item.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useESRouter } from '@extscreen/es3-router'
import { qtRef } from '@quicktvui/quicktvui3'
import quit from '../../assets/accounts/quit.png'
import quitFocus from '../../assets/accounts/quit-focus.png'
import switchs from '../../assets/accounts/switch.png'
import switchsFocus from '../../assets/accounts/switch-focus.png'
import wx from '../../assets/accounts/wx.png'
import bg from '../../assets/accounts/bg.png'
const listData = qtRef()
const router = useESRouter()

const btnList = [{
  text: '切换账号',
  icon: switchs,
  focusIcon: switchsFocus,
  key: 'switch',
}, {
  text: '退出登录',
  icon: quit,
  focusIcon: quitFocus,
  key: 'exit'
}]
onMounted(() => {

})


const jumpDetail = () => {
  router.push({
    name: 'goodsDetail',
  })
}
</script>
<style scoped>
.accounts-box {
  width: 1920px;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.accounts-bg-image {
  width: 1920px;
  height: 1080px;
  position: absolute;
}

.accounts-btn-box {
  width: 660px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
}

.accounts-portrait {
  width: 250px;
  height: 250px;
  border-radius: 150px;
  margin-bottom: 20px;
}

.accounts-wx-logo {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  right: 850px;
}

.accounts-name {
  font-size: 30px;
  color: #fff;
  margin-bottom: 50px;
  width: 300px;
  height: 40px;
}
</style>
