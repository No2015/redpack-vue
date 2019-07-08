<template>
    <div id="content" class="content content-noheader content-nofooter">
        <div class="redpack-bg">
            <ul class="flex-box pad4 text-nowrap">
                <li class="tl pad2-0">
                    <div class="orange-arr c-white hand back-go-to dblb" @click="back"><span class="pad0-2 c-orange">发红包</span></div>
                </li>
            </ul>
            <div class="tc c-orange font5">
                <p class="pad2-0-0">可发红包数量</p>
                <p class="pad4-0-0 font62">0</p>
            </div>
            <div class="red-pack-box">
                <div class="pad4"></div>
                <div class="pad4"></div>
                <div class="pad4"></div>
                <div class="pad4"></div>
                <div class="pad4"></div>
                <div class="pad4"></div>
                <div class="pad4">
                    <div class="pad4">
                        <div class="pad0-4 tc">
                            <div class="pad0-4">
                                <div class="pad0-4">
                                    <div class="pad2">
                                        <div class="po-rel">
                                            <input type="text" v-model.number="number" id="number" name="number" class="form-input font42 form-input-2 bg-ffffff place-60605f c-dark" placeholder="发送红包">
                                            <span class="placeholder-txt pad4-2 c-60605f">个</span>
                                        </div>
                                    </div>
                                    <div class="pad2">
                                        <span @click="sendredpack" id="send-redpack" :class="'bjs-btn bjs-btn-full lh15 pad3-0 bg-send-redpack c-orange bd-none' + (load ? ' load-text' : '')">
                                            <span class="send-text">发红包</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tc pad2 c-white opacity-8 font3">对方可领取红包金额为0.1-5000元不等</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data () {
        return {
            number: '',
            load: false
        }
    },
    methods: {
        sendredpack(){
            let that = this
            if(that.load){
                return false
            }
            if(that.number <= 0 || isNaN(that.number)){
                that.$layer.msg('请输入红包数量', {icon: 1})
                return !1
            }
            that.load = true
            this.$store.dispatch('addRedPack', {
                data: {
                    number: that.number
                },
                callback: function(){
                    that.load = false
                }
            })
            
        },
        back(){
            this.$router.back()
        }
    }
}
</script>
