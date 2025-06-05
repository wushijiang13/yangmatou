<template>
    <div class="goods-swiper-box" :focusable="true" :enableFocusBorder="false" :focusScale="1.05" eventFocus
        layout="${layout}">
        <swiper ref="swiperRef" class="goods-swiper" :initialPage="2" needAnimation :current="currentSlide"
            @dragging="onDragging" @dropped="onDropped" @stateChanged="onStateChanged">
            <swiper-slide class="swiper-slide">
                <qt-image
                    src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
                    class="qt-image" />
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <qt-image
                    src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
                    class="qt-image" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";
// 
const currentSlide = ref<number>(0)


function onDragging(e) {

}

function onDropped(e) {

}

function onStateChanged(e) {

}
const swiperRef = ref()
onMounted(() => {

    console.log("测试swiper组件是否挂载成功")
    console.log(swiperRef.value)
    // swiper.value.initialPage(2);
})
</script>

<style scoped>
.goods-swiper-box {
    width: 890px;
    height: 340px;
    border-radius: 20px;
    overflow: hidden;
    background-color: rgb(24, 22, 18);
}

.goods-swiper {
    width: 890px;
    height: 340px;
    border-radius: 20px;
}

.qt-image {
    width: 900px;
    height: 340px;
}

.swiper-slide {
    height: 200px;
}
</style>