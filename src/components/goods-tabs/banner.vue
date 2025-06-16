<template>
    <div>
        <qt-tabs ref="tabRef" tabPageClass="qt-tabs-content-css" @onTabPageLoadData="onTabPageLoadData"
            class="qt-tabs-waterfall-root-css" @onTabPageItemClick="jumpDetail"
            @onTabMoveToTopEnd="onTabMoveToBottomStart">
            <template v-slot:waterfall-item>
                <goodsItem :type="1" :focusable="true" :focusscale="0.1" eventClick />
                <!-- <goodsBanner :type="2" :focusable="true" /> -->
            </template>
            <template v-slot:waterfall-section>
                <div :type="1010" :isHorizontal="true" @loadMore="multilevelTabLoadMore" />
            </template>
        </qt-tabs>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "@vue/runtime-core";
import {
    QTWaterfallSection, QTTabItem, qtTabsRef, QTWaterfallSectionType, QTTabPageData,
    QTITab, QTTab, QTWaterfall, QTPoster, VirtualView
} from "@quicktvui/quicktvui3";
import type { QTWaterfallItem } from '@quicktvui/quicktvui3'
import { useESRouter } from '@extscreen/es3-router'
import goodsItem from '../goods-item/index.vue'
import goodsBanner from '../goods-banner/index.vue'
import { getHomeListDataApi } from '../../api/index'
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
let pageIndexLast = -1;
const pageList = ref<Array<Number>>([
])
const initBannerData = (sectionId: string): Array<QTWaterfallItem> => {
    let data: Array<QTWaterfallItem> = []
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
const initGoodsItemData = (sectionId: string, info): Array<QTWaterfallItem> => {
    let data: Array<QTWaterfallItem> = [];
    info.forEach((item, index: number) => {
        data.push({
            _id: `${sectionId}_${index}`,
            type: 1,
            decoration: {
                left: 70,
                bottom: 20,
            },
            focus: { enable: true, scale: 1.02, border: false },
            goodsIcon: item.pic,
            goodsName: item.name,
            goodsPrice: item.originalPrice == item.price ? '' : item.originalPrice,
            goodsPriceDeleteLine: item.originalPrice == item.price ? '' : item.originalPrice + " ",
            isGoodsPrice: item.originalPrice == item.price ? false : true,
            goodsNewPrice: item.price,
            productid: item.id,
            style: {
                width: 300,
                height: 370,
            }
        })
    })
    return data;
}
const onTabMoveToBottomStart = () => {
    console.log("该更新了")
}
async function onTabPageLoadData(
    pageIndex: number,
    pageNo: number,
    useDiff: boolean
): Promise<void> {
    console.log("触发")
    console.log(pageNo)
    console.log(pageIndex)
    // if (pageIndexLast === pageIndex) {
    //     return
    // }
    // pageIndexLast = pageIndex
    let sectionList: Array<QTWaterfallSection> = []
    // let banner_section: QTWaterfallSection = {
    //     _id: '1',
    //     type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    //     itemList: initBannerData(`banner`),
    //     style: {
    //         width: 1920,
    //         height: 320,
    //     },
    //     decoration: {
    //         top: 20,
    //         bottom: 20,
    //     }
    // }
    // sectionList.push(banner_section)
    let params = {
        activityType: props.tabList[pageIndex].skinCode == 'shop-mustbuy' ? 1 : 2,
        pageSize: (15 * pageNo) == 0 ? 15 : 15 * pageNo,
        sectionId: props.tabList[pageIndex].sectionId
    }
    let data = await getProductList(params);
    // pageList.value[pageIndex] = 1;
    console.log("查看请求")
    console.log(data)
    for (let i = 0; i < 1; ++i) {
        let goods_section: QTWaterfallSection = {
            _id: '2',
            type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
            itemList: initGoodsItemData(`goods`, data.productList),
            style: {
                width: 1920,
                height: -1,
                // marginTop: 20
            },
            decoration: {
                top: 20,
                bottom: 0,
            }
        }
        sectionList.push(goods_section)
    }
    const tabPage: QTTabPageData = {
        useDiff: useDiff,
        data: sectionList
    }
    tabRef.value?.setPageData(pageIndex, tabPage)
}

const multilevelTabLoadMore = async (pageNo: number, sectionIndex: number, tabIndex: number, pageIndex: number) => {
    let currentPage = Number(pageList.value[pageIndex]);
    let params = {
        activityType: props.tabList[pageIndex].skinCode == 'shop-mustbuy' ? 1 : 2,
        pageSize: 15 * currentPage,
        sectionId: props.tabList[pageIndex].sectionId
    }
    let data = await getProductList(params);
    if (data.length > 0) {
        let listSID = tabRef.value?.getPageSection(pageIndex, sectionIndex)!.listSID
        VirtualView.call(listSID, 'setListData', data)
    }
}

// const onTabMoveToTopEnd = (pageIndex: number) => {
//     // 原代码中可能存在类型不匹配问题，直接将 pageList.value[pageIndex] 转换为 number 类型后再进行加法运算
//     const currentPage = Number(pageList.value[pageIndex]);
//     pageList.value[pageIndex] = currentPage + 1;
//     console.log(pageIndex)
//     let section = tabRef.value?.getPageSectionList(pageIndex);
//     console.log("显示section")
//     console.log(section)
//     // tabRef.value?.addListData();
// }

/**
 * 初始化标签页
 */
const initTabs = () => {
    const tabItemList: Array<QTTabItem> = []
    console.log("初始化tab")
    console.log(props.tabList)
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
        height: 900,
    }
    tabRef.value?.initPage(waterfallData)
}

const jumpDetail = (pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem) => {
    router.push({
        name: 'goodsDetail',
        params: {
            productid: item.productid
        }
    })
}

const itemData = ref<any>([]);
const getProductList = (params) => {
    return getHomeListDataApi(params).then((res) => {
        if (res.status == 200) {
            console.log("查看数据1")
            let data = JSON.parse((res as any).body);
            return data
        }
    })
}
watch(() => props.tabList, (newVal) => {
    initTabs();
})
onMounted(async () => {
})

</script>

<style>
.qt-tabs-waterfall-root-css .qt-tabs-content-css {
    width: 1920px;
    height: 980px;
}

.grid-banner-box {
    width: 1920px;
    height: 380px;
    background-color: #000;
}

.banner-box {
    width: 1920px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
</style>