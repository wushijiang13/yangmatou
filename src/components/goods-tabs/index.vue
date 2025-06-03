<template>
    <div class="es-sdk-root-css">
        <div class="es-sdk-content-divider-css" />
        <qt-tabs ref="tabRef" tabPageClass="qt-tabs-content-css" :tabs="tabData" class="qt-tabs-waterfall-root-css">
            <template v-slot:waterfall-item>
                <!-- <goodsBanner :type="1" /> -->
                <goodsItem :type="1" />
            </template>
        </qt-tabs>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from "@vue/runtime-core";
import {
    QTWaterfallSection, QTTabItem, qtTabsRef, QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import { generatorAppWaterfallSection } from "../__mocks__/app";
import goodsItem from '../goods-item/index.vue'
import goodsBanner from '../goods-banner/index.vue'
const props = defineProps({
    tabList: Array<QTTabItem>
})
const tabData = qtTabsRef()
function buildTabItemList() {
    //tab item list
    const tabItemList: Array<QTTabItem> = []

    props.tabList.forEach((item, index) => {
        const section: QTWaterfallSection = generatorAppWaterfallSection('0', "")
        let tabItem: QTTabItem = {
            _id: '' + index,
            type: 20000,
            text: item.name,
            titleSize: 20,
            decoration: {
                left: 40,
                right: 20,
            },
            content: [section]
        }
        tabItemList.push(tabItem)
    })
    return tabItemList
}

onMounted(() => {
    const data = buildTabItemList()
    tabData.value = data //初始化数据
})

</script>

<style>
.qt-tabs-waterfall-root-css {
    width: 1920px;
    height: 1100px;
    background-color: red;
}

.qt-tabs-waterfall-root-css .qt-tabs-content-css {
    width: 1920px;
    height: 900px;
}
</style>