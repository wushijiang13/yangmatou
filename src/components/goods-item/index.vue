<template>
    <div :class="size == 'default' ? 'goods-item-box' : 'goods-smail-item-box'" layout="${layout}">
        <img :class="size == 'default' ? 'goods-item-img' : 'goods-smail-item-img'" :focusable="false"
            :enableFocusBorder="false" src="${goodsIcon}" />
        <text-view :class="size == 'default' ? 'goods-label' : 'goods-smail-label'" :focusable="false" :textSize="26"
            :ellipsizeMode="2" enablePostTask :duplicateParentState="true" :lines="1" gravity="center"
            text="${goodsName}" />
        <div v-show="isShowPrice" class="goods-price-box" :duplicateParentState="true">
            <div showIf="${isGoodsPrice}" class="goods-original-price-box" :duplicateParentState="true">
                <div class="goods-line" :duplicateParentState="true">
                    <text-view :duplicateParentState="true" :autoWidth="true" text="${goodsPriceDeleteLine}">
                    </text-view>
                </div>
                <text-view class="goods-price-unit" :duplicateParentState="true" :focusable="false" :textSize="14"
                    :ellipsizeMode="2" enablePostTask :gravity="'bottom'" text="￥" />
                <text-view :autoWidth="true" class="goods-original-price" :duplicateParentState="true"
                    :focusable="false" :ellipsizeMode="2" enablePostTask gravity="bottom" text="${goodsPrice}" />
            </div>

            <div class="goods-current-price-box">
                <text-view class="goods-current-price-unit" :duplicateParentState="true" :focusable="false"
                    :textSize="20" :ellipsizeMode="2" gravity="bottom" enablePostTask text="￥" />
                <!-- <text-view class="goods-current-price" :duplicateParentState="true" :focusable="false" :textSize="26"
                    enablePostTask text="1200" /> -->
                <qt-text class="goods-current-price" :autoWidth="true" text="${goodsNewPrice}"></qt-text>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    isShowPrice: {
        type: Boolean,
        default: true
    },
    size: {
        type: String,
        default: 'default'
    },
    row: {
        type: Object,
        default: () => {
            return {}
        }
    }
})
console.log("内部ITEM ROW")
console.log(props.row)

</script>

<style scoped>
.goods-item-box {
    width: 300px;
    height: 370px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    focus-background-color: white;
}

.goods-item-img {
    width: 280px;
    height: 270px;
    margin-top: 0px;
    border-radius: 20px;
}



.goods-label {
    margin-top: 10px;
    width: 300px;
    height: 30px;
    background-color: transparent;
    color: white;
    focus-color: black;
    select-color: black;
    align-self: flex-start;
}


.goods-price-box {
    margin-top: 10px;
    width: 300px;
    height: 30px;
    background-color: transparent;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

.goods-original-price-box {
    width: 150px;
    display: inline-flex;
    flex-direction: row;
    /* align-items: flex-start; */
    focus-color: black;
    select-color: black;
}

.goods-line {
    height: 2px;
    z-index: 999;
    position: absolute;
    top: 26px;
    display: flex;
    background-color: #fff;
    focus-background-color: #000;
}

.goods-line-focus {
    height: 2px;
    z-index: 999;
    position: absolute;
    top: 26px;
    display: flex;
    background-color: #000;
}

.goods-price-unit {
    color: white;
    focus-color: black;
    select-color: black;
    display: block;
    width: 16px;
    height: 36px;
}

.goods-original-price {
    color: white;
    font-size: 20px;
    height: 38px;
    focus-color: black;
    select-color: black;
    width: 90px;
}

.goods-current-price-box {
    width: 150px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.goods-current-price-unit {
    width: 20px;
    height: 32px;
    color: rgb(255, 1, 1);
    focus-color: rgb(255, 1, 1);
    select-color: rgb(255, 1, 1);
    font-size: 20px;
}

.goods-current-price {
    /* width: 130px; */
    height: 30px;
    color: rgb(255, 1, 1);
    focus-color: rgb(255, 1, 1);
    select-color: rgb(255, 1, 1);
    font-size: 28px;
    display: flex;
    justify-items: flex-end;
    text-align: right;
    margin-bottom: 8px;
}

.goods-smail-item-box {
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    focus-background-color: white;

}

.goods-smail-item-img {
    width: 230px;
    height: 240px;
    margin-top: 0px;
    border-radius: 20px;
}

.goods-smail-label {
    margin-top: 10px;
    width: 250px;
    height: 30px;
    background-color: transparent;
    color: white;
    focus-color: black;
    select-color: black;
    align-self: flex-start;
}
</style>