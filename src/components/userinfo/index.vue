<template>
    <div id="content" class="content content-noheader content-nofooter">
        <ul class="flex-box pad4 text-nowrap">
            <li class="tl pad2-0">
                <div class="black-arr c-black hand back-go-to dblb"  @click="back"><span class="pad0-2">我的资料</span></div>
            </li>
        </ul>
        <div class="pad0-4">
            <div class="user-avatar">
                <ul class="flex-box box-shadow-10 bora25 pad4">
                    <li class="c-60605f">头像</li>
                    <li class="tr"><img class="avatar-icon" :src="userinfo.avatar" alt=""></li>
                </ul>
            </div>
            <div class="user-info pad4-0">
                <div class="box-shadow-10 bora25 pad4">
                    <ul class="pad0-4">
                        <li class="pad4-0 bb-ddd-2">
                            <ul class="flex-box text-nowrap pad4-0">
                                <li class="c-60605f">用户名</li>
                                <li class="tr c-60605f">{{ userinfo.name }}</li>
                            </ul>
                        </li>
                        <li class="pad4-0 bb-ddd-2">
                            <ul class="flex-box text-nowrap pad4-0">
                                <li class="c-60605f">手机号码</li>
                                <li class="tr c-60605f">{{ userinfo.phone || '未填写' }}</li>
                            </ul>
                        </li>
                        <li class="pad4-0">
                            <ul class="flex-box text-nowrap pad4-0">
                                <li class="c-60605f">进入时间</li>
                                <li class="tr c-60605f">{{ userinfo.addtime }}</li>
                            </ul>
                        </li>
                        <li class="pad4-0-0">
                            <ul class="flex-box text-nowrap pad4-0">
                                <li class="tc">
                                    <router-link tag="div" to="/userinfo-edit">
                                    <a class="bjs-btn bjs-btn-full lh15 bg-fd5e44 c-white bora25">去编辑我的资料</a>
                                    </router-link>                                    
                                </li>
                            </ul>
                        </li>
                    </ul>
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
    computed: {
        userinfo(){
            return this.$store.state.userinfo
        }
    },
    methods: {
        back(){
            this.$router.back()
        }
    }
}
</script>
