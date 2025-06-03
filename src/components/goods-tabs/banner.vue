<template>
    <div>
        <qt-tabs ref="tabRef" tabPageClass="qt-tabs-content-css" @onTabPageLoadData="onTabPageLoadData"
            class="qt-tabs-waterfall-root-css">
            <template v-slot:waterfall-vue-section>
                <!-- <div>
                   
                    
                </div> -->
                <!-- <qt-grid-view ref="gridViewBannerRef" :listData="BannerData" class="grid-banner-box" :spanCount="2"
                    :areaWidth="1900">

                </qt-grid-view> -->
                <!--  -->
                <goodsBanner :focusable="false" />
                <qt-grid-view ref="gridViewItemRef" :listData="goodsItemData" class="grid-item-box" clipChildren="false"
                    :clipPadding="false" :enablePlaceholder="true" :preloadNo="5" :listenBoundEvent="true"
                    :openPage="true" :spanCount="5" @item-click="jumpDetail">
                    <goodsItem :type="1" :focusable="true" eventClick />
                </qt-grid-view>
            </template>
        </qt-tabs>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";
import {
    QTWaterfallSection, QTTabItem, qtTabsRef, QTWaterfallSectionType, QTTabPageData,
    QTITab, QTTab, QTWaterfall, QTPoster, qtRef
} from "@quicktvui/quicktvui3";
import type { QTIWaterfall, QTWaterfallItem } from '@quicktvui/quicktvui3'
import { generatorAppWaterfallSection } from "../__mocks__/app";
import { useESRouter } from '@extscreen/es3-router'
import goodsItem from '../goods-item/index.vue'
import goodsBanner from '../goods-banner/index.vue'
import type { GoodsTabs } from '../../types/index'

const router = useESRouter()
// 为 tabList 添加默认值，避免 undefined 类型错误
const props: GoodsTabs.GoodsTabsBannerProps = defineProps({
    tabList: {
        type: Array as () => Array<QTTabItem>,
        default: () => []
    }
})
// const tabData = qtTabsRef()
const tabRef = ref<QTITab>()
const BannerData = qtRef()
const goodsItemData = qtRef()

function onTabPageLoadData(
    pageIndex: number,
    pageNo: number,
    useDiff: boolean
): void {
    const sectionOne: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_VUE,
        itemList: [],
        style: {
            width: 1920,
            height: 320,
        },
        decoration: {
            top: 20,
            bottom: 20,
        },
    }
    const sectionList: Array<QTWaterfallSection> = [sectionOne]

    const tabPage: QTTabPageData = {
        useDiff,
        data: sectionList,
    }
    tabRef.value?.setPageData(pageIndex, tabPage)
}

const loadMore = () => {

}
const onItemClick = () => {
    console.log("执行onItemClick")
}
const onItemFocus = () => {
    console.log("执行onItemFocus")
    router.push({
        name: 'goodsDetail',
    })
}

/**
 * 初始化标签页
 */
const initTabs = () => {
    const tabItemList: Array<QTTabItem> = []
    props.tabList.forEach((item, index) => {
        const section: QTWaterfallSection = generatorAppWaterfallSection('0', "")
        const tabItem: QTTabItem = {
            _id: `${index}`,
            type: 20000,
            text: item.name,
            titleSize: 20,
            decoration: {
                left: 40,
                right: 20,
            },
        }
        tabItemList.push(tabItem)
    })
    const tab: QTTab = {
        defaultFocusIndex: 0,
        defaultIndex: 0,
        itemList: tabItemList,
    }
    tabRef.value?.initTab(tab)
    const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
    }
    tabRef.value?.initPage(waterfallData)
}




const initWaterGoodsItem = () => {
    goodsItemData.value = new Array(30).fill(30).map((_, index) => {
        return {
            text: index + '',
            type: 1,
            decoration: { top: 20, left: 30, right: 30, bottom: 6 },

        }
    })
    console.log("查看数据")
    console.log(goodsItemData.value)
}


const initWaterGoodsBanner = () => {
    BannerData.value = new Array(2).fill(1).map((_, index) => {
        return {
            text: index + '',
            type: 1,
            decoration: { left: 30, right: 30, bottom: 6 },
        }
    })
}

const jumpDetail = () => {
    console.log("触发了")
    router.push({
        name: 'goodsDetail',
    })
}

onMounted(() => {
    initTabs();
    // initWaterGoodsBanner();
    initWaterGoodsItem();
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

.grid-banner-box {
    width: 1920px;
    height: 380px;
    background-color: #000;
}

.grid-item-box {
    width: 1920px;
    height: 1080px;
    margin-top: 0px;
    overflow: hidden;
    background-color: #000;
    /* z-index: 999; */
}

.water-banner-box {
    /* width: 1920px;
    height: 360px;
     */
    background-color: antiquewhite;
}

.water-item-box {
    width: 1920px;
    height: 600px;
    background-color: rgb(249, 148, 16);
}
</style>