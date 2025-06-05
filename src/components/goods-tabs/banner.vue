<template>
    <div>
        <qt-tabs ref="tabRef" tabPageClass="qt-tabs-content-css" @onTabPageLoadData="onTabPageLoadData"
            class="qt-tabs-waterfall-root-css" @onTabPageItemClick="jumpDetail">
            <template v-slot:waterfall-item>
                <goodsItem :type="1" :focusable="true" eventClick />
                <goodsBanner :type="2" :focusable="true" />
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
import type { QTWaterfallItem } from '@quicktvui/quicktvui3'
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
let pageIndexLast = -1;
const initBannerData = (sectionId: string): Array<QTWaterfallItem> => {
    let data: Array<QTWaterfallItem> = []
    let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    for (let i = 0; i < 2; i++) {
        const item: QTWaterfallItem = {
            _id: `${sectionId}_${i}`,
            type: 2,
            decoration: {
                left: 70,
                top: 20,
                bottom: 10,
            },
            appIcon: 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
            appName: '123',
            style: {
                width: 850,
                height: 340,
            }
        }
        data.push(item)
    }
    return data;
}
const initGoodsItemData = (sectionId: string): Array<QTWaterfallItem> => {
    let data: Array<QTWaterfallItem> = []
    let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    for (let i = 0; i < 15; i++) {
        const item: QTWaterfallItem = {
            _id: `${sectionId}_${i}`,
            type: 1,
            decoration: {
                left: 70,
                bottom: 40,
            },
            appIcon: 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
            appName: '123',
            style: {
                width: 300,
                height: 370,
            }
        }
        data.push(item)
    }
    return data;
}
function onTabPageLoadData(
    pageIndex: number,
    pageNo: number,
    useDiff: boolean
): void {
    console.log('---------loadPageData---------->>>' +
        '  pageIndex:' + pageIndex +
        '  useDiff:' + useDiff
    )
    if (pageIndexLast === pageIndex) {
        return
    }
    pageIndexLast = pageIndex
    let sectionList: Array<QTWaterfallSection> = []
    let banner_section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        itemList: initBannerData(`banner`),
        style: {
            width: 1920,
            height: 320,
        },
        decoration: {
            top: 20,
            bottom: 20,
        }
    }
    sectionList.push(banner_section)
    for (let i = 0; i < 1; ++i) {
        let goods_section: QTWaterfallSection = {
            _id: '2',
            type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
            itemList: initGoodsItemData(`goods`),
            style: {
                width: 1920,
                height: -1,
            },
        }
        console.log(goods_section)
        sectionList.push(goods_section)
    }

    const tabPage: QTTabPageData = {
        useDiff: useDiff,
        data: sectionList
    }
    tabRef.value?.setPageData(pageIndex, tabPage)
}

/**
 * 初始化标签页
 */
const initTabs = () => {
    const tabItemList: Array<QTTabItem> = []
    props.tabList.forEach((item, index) => {
        // const section: QTWaterfallSection = generatorAppWaterfallSection('0', "")
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


const jumpDetail = () => {
    console.log("触发了")
    router.push({
        name: 'goodsDetail',
    })
}

onMounted(() => {
    initTabs();
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

.banner-box {
    width: 1920px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.goods-item-box {
    width: 1920px;
    height: 390px;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-around;
    /* background-color: aqua; */
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