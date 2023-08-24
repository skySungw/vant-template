<template>
    <div class="index">
        <van-nav-bar
            title="vant"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" />
        </van-cell-group>

        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>

        <van-tabbar v-model="active"  @change="onChangeTabbar">
            <van-tabbar-item badge="3">
                <span>自定义</span>
                <template #icon="props">
                <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>

export default {
    name: 'Home',
    data() {
        return {
            active: 0,
            icon: {
                active: 'https://img01.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
            },
        }
    },
    methods: {
        onClickLeft() {
            this.$toast('返回');
        },
        onClickRight() {
            this.$toast('按钮');
        },
        // 监听底部菜单切换
        onChangeTabbar(index) {
            this.$notify({ type: 'primary', message: `你切换到了标签${index}` });
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
   
}
</style>