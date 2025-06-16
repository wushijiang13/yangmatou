<template>
    <div class="header-box">
        <div class="header-left-box">
            <slot name="header-left"></slot>
        </div>
        <div class="header-right-box">
            <slot name="header-right"></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
</script>
<style>
.header-box {
    width: 1920px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.header-left-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    height: 90px;
}

.header-right-box {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 90px;
    padding-right: 20px;
}
</style>