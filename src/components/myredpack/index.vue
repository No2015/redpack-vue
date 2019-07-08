<template>
    <div id="content" class="content content-noheader content-nofooter">
        <ul class="flex-box pad4 text-nowrap">
            <li class="tl pad2-0">
                <div class="black-arr c-black hand back-go-to dblb" @click="back"><span class="pad0-2">我的红包</span></div>
            </li>
        </ul>
        <div class="pad0-4">
            <div class="pad0-4">
                <div class="tc bg-fd5e44 bora25 c-white pad3">共发放: <span>3</span></div>
                <div class="pad1"></div>
                <ul class="pad4-0">
                    <!-- item -->
                    <li class="pad4 bora25 box-shadow-10 redpack-icon mb6 hand redpack-item">
                        <ul class="flex-box text-nowrap">
                            <li>
                                <div class="redpack-left">
                                    <p class="name weight600 font5 pad2-0-0">3个红包共66元</p>
                                    <p class="status pad2-0-0 font3 opacity-8">已领取2个</p>
                                    <p class="status pad4-0-0 font3 opacity-8">2019/07/03</p>
                                    <p class="pad1"></p>
                                </div>
                            </li>
                            <li class="tr">
                                <p class="number weight600 font62">- ¥ <span>100.00</span></p>
                            </li>
                        </ul>
                    </li>
                    <!-- item -->
                    <li class="pad4 bora25 box-shadow-10 redpack-icon mb6 hand redpack-item">
                        <ul class="flex-box text-nowrap">
                            <li>
                                <div class="redpack-left">
                                    <p class="name weight600 font5 pad2-0-0">3个红包共66元</p>
                                    <p class="status pad2-0-0 font3 opacity-8">已领取2个</p>
                                    <p class="status pad4-0-0 font3 opacity-8">2019/07/03</p>
                                    <p class="pad1"></p>
                                </div>
                            </li>
                            <li class="tr">
                                <p class="number weight600 font62">- ¥ <span>100.00</span></p>
                            </li>
                        </ul>
                    </li>
                    <!-- item -->
                    <!-- 没数据 -->
                    <li class="pad6-0 hide">
                        <div class="tc c-light-grey opacity-8">暂时没有数据~</div>
                    </li>
                </ul>
                <!-- 加载完毕 -->
                <div class="over-line tc">
                    <span class="over-line-txt po-rel">
                        <span class="bg-ffffff po-rel pad0-4 c-light-grey font3">我是有底线的</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data () {
        return {}
    },
    methods: {
        back(){
            this.$router.back()
        }
    }
}
</script>
