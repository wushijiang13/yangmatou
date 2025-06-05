<template>
    <div v-if="isShow" class="dialog-box" :focusable="true" :enableFocusBorder="false" :focusScale="1" eventFocus>
        <div class="dialog-content-box">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps } from "@vue/runtime-core";
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    },
})
</script>

<style scoped>
.dialog-box {
    width: 1920px;
    height: 1080px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
}

.dialog-content-box {
    width: 900px;
    height: 660px;
    background-color: #1b1c27;
    border-radius: 20px;
    border-style: solid;
    border-color: #fff;
    border-width: 2px;
}
</style>