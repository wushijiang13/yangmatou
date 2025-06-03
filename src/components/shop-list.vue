<template>
    <div class="es-sdk-root-css">
        <qt-waterfall ref="waterfall" class="qt-waterfall-css" @onItemFocused="onItemFocused" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {  onMounted } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import {
    QTWaterfallItemType,
    QTWaterfallSectionType,
} from '@quicktvui/quicktvui3'
// import {
//     buildPosterItemList,
//     buildPosterTitleItemList,
// } from './poster'
import type {
    QTIWaterfall,
    QTWaterfall,
    QTWaterfallItem,
    QTWaterfallSection,
    QTWaterfallTabItem,
} from '@quicktvui/quicktvui3'

// const TAG = 'TabListSectionPage'

// const log = useESLog()
// const waterfall = ref<QTIWaterfall>()

function onItemFocused(
    sectionIndex: number,
    position: number,
    isFocused: boolean,
    item: QTWaterfallItem
) {
    // if (log.isLoggable(ESLogLevel.DEBUG)) {
    //     log.d(
    //         TAG,
    //         item,
    //         `sectionIndex:${sectionIndex}  ` +
    //         `position:${position}  ` +
    //         `isFocused:${isFocused}  `
    //     )
    // }

    // if (item.type === QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB) {
    //     if (isFocused) {
    //         const section = waterfall.value?.getSection(1)
    //         if (section) {
    //             section.itemList = buildPosterTitleItemList(`Tab:${position}`)
    //             waterfall.value?.updateSection(1, section)
    //         }
    //     }
    // }
}

onMounted(() => {
    // const waterfallData: QTWaterfall = {
    //     width: 1920,
    //     height: 260,
    // }
    // waterfall.value?.init(waterfallData)
    // const listSection: QTWaterfallSection = {
    //     _id: '2',
    //     type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    //     titleStyle: {
    //         width: 0,
    //         height: 0,
    //         fontSize: 50,
    //     },
    //     style: {
    //         width: 1920,
    //         height: 400,
    //     },
    //     itemList: buildPosterItemList('2'),
    // }

    // const sectionList: Array<QTWaterfallSection> = [listSection]
    // waterfall.value?.setSectionList(sectionList)
})
</script>

<style>
.es-sdk-root-css {
    width: 1920px;
    height: 980px;
    background-color: #26292f;
}

.qt-waterfall-css {
    width: 1920px;
    height: 980px;
}
</style>