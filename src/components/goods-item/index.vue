<template>
    <div class="goods-item-box" :focusable="true" :enableFocusBorder="false" :focusScale="1.05" eventClick eventFocus>

        <img class="goods-item-img" :duplicateParentState="true" :focusable="false" :enableFocusBorder="false"
            src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750" />

        <text-view class="goods-label" :duplicateParentState="true" :focusable="false" :textSize="26" :ellipsizeMode="2"
            enablePostTask :lines="1" gravity="center" text="海蓝之谜 修复精华60ml 赠送" />
        <div class="goods-price-box" :duplicateParentState="true">
            <div class="goods-original-price-box" :duplicateParentState="true">
                <qt-text class="goods-line" :duplicateParentState="true" :autoWidth="true" text="1232">
                </qt-text>
                <text-view class="goods-price-unit" :duplicateParentState="true" :focusable="false" :textSize="14"
                    :ellipsizeMode="2" enablePostTask gravity="bottom" text="￥" />
                <text-view :autoWidth="true" class="goods-original-price" :duplicateParentState="true"
                    :focusable="false" :ellipsizeMode="2" enablePostTask gravity="bottom" text="1399" />
            </div>

            <div class="goods-current-price-box">
                <text-view class="goods-current-price-unit" :duplicateParentState="true" :focusable="false"
                    :textSize="20" :ellipsizeMode="2" gravity="bottom" enablePostTask text="￥" />
                <!-- <text-view class="goods-current-price" :duplicateParentState="true" :focusable="false" :textSize="26"
                    enablePostTask text="1200" /> -->
                <qt-text class="goods-current-price" :autoWidth="true" text="1200"></qt-text>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

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
    /* width: 100px; */
    height: 1px;
    background-color: white;
    z-index: 999;
    focus-background-color: black;
    position: absolute;
    top: 26px;
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
</style>