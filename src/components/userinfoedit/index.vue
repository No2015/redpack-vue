<template>
    <div class="content content-noheader content-nofooter">
        <ul class="flex-box pad4 text-nowrap">
            <li class="tl pad2-0">
                <div class="black-arr c-black hand back-go-to dblb" @click="back"><span class="pad0-2">返回</span></div>
            </li>
        </ul>
        <form action="/" method="post" id="submit-user-info">
            <div class="pad0-4">
                <div class="user-avatar">
                    <label for="avatar" class="db">
                        <ul class="flex-box box-shadow-10 bora25 pad4">
                            <li class="c-60605f">头像</li>
                            <li class="tr"><img class="avatar-icon" :src="avatar" alt=""></li>
                        </ul>
                        <input @change="change" ref="avatar" type="file" id="avatar" name="avatar" class="hide send-item" placeholder="请选择头像">
                    </label>
                </div>
                <div class="user-info pad4-0">
                        <div class="box-shadow-10 bora25 pad4">
                            <ul class="pad0-4">
                                <li class="bb-ddd-2">
                                    <div class="flex-box text-nowrap pad4-0">
                                        <div class="c-60605f">用户名</div>
                                        <div class="tr c-60605f w100 ml2">
                                            <input type="text" class="form-input bd-none send-item" :data-name="userinfo.name" v-model.trim="name" id="name" name="name" placeholder="请输入用户名">
                                        </div>
                                    </div>
                                </li>
                                <li class="bb-ddd-2">
                                    <div class="flex-box text-nowrap pad4-0">
                                        <div class="c-60605f">手机号码</div>
                                        <div class="tr c-60605f w100 ml2">
                                            <input type="text" class="form-input bd-none send-item" v-model.number="phone" id="phone" name="phone" placeholder="请输入手机号码">
                                        </div>
                                    </div>
                                </li>
                                <li class="pad4-0-0">
                                    <ul class="flex-box text-nowrap pad4-0">
                                        <li class="tc">
                                            <span @click="save" :class="'bjs-btn bjs-btn-full lh15 bg-fd5e44 c-white bora25' + (load ? ' load-text' : '')">
                                                <span class="send-text">保存</span>
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data () {
        return {
            name: '',
            phone: '',
            avatar: '',
            load: false,
            init: false
        }
    },
    computed: {
        userinfo(){
            if(!this.init && this.$store.state.userinfo.name != ''){
                this.init = true
                this.name = this.$store.state.userinfo.name
                this.phone = this.$store.state.userinfo.phone
                this.avatar = this.$store.state.userinfo.avatar
            }            
            return this.$store.state.userinfo
        }
    },
    methods: {
        back(){
            this.$router.back()
        },
        change(){
            let file = this.$refs.avatar.files[0];
            let URL = window.URL || window.webkitURL;
            let imageURL = URL.createObjectURL(file);
            this.avatar = imageURL
            // 图片上传的处理逻辑 要么直接提交全部信息 那就走save，要么先提交图片返回资源路径，需要在这里实现
        },
        save(){
            let that = this
            console.log(this.userinfo)
            if(that.load){
                return false
            }
            if(that.name == ''){
                that.$layer.msg('请输入用户名', {icon: 1})
                return !1
            }
            if(that.phone == ''){
                that.$layer.msg('请输入手机号', {icon: 1})
                return !1
            }
            that.load = true
            this.$store.dispatch('updateUserInfo', {
                userinfo: {
                    name: that.name,
                    phone: that.phone,
                    avatar: that.avatar
                },
                callback: function(){
                    that.load = false
                }
            })
        }
    }
}
</script>
