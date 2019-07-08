<template>
    <div id="content" class="content content-noheader">
        <div class="center-bg">
            <div class="pad4-4-0">
                <div class="pad4">
                    <ul class="flex-box pad1-2">
                        <li><span class="man-icon weight600 c-orange font62 text-shadow">个人中心</span></li>
                        <li class="tr pad2-0-0">
                            <router-link tag="div" to="/">
                                <a class="note-icon c-orange font42">系统公告</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pad0-4">
                <div class="pad0-4">
                    <ul class="flex-box text-nowrap">
                        <li class="flex-item-3">
                            <div class="dblb vcenter">
                                <img class="avatar-icon" src="@/assets/images/avatar.png" alt="">
                            </div>
                            <div class="dblb ml2 c-orange vcenter text-shadow">
                                <p>昵称：<span class="info-name">游客1106318526</span></p>
                                <p class="pad3-0-0">注册：<span class="info-time">2019-07-02</span></p>
                            </div>
                        </li>
                        <li class="tr">
                            <p class="pad2"></p>
                            <router-link tag="p" to="/addredpack">
                                <a class="bjs-btn bjs-btn-orange bora20 pad2-4 bjs-btn-shadow">发红包</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="center-number-list">
            <div class="pad4">
                <div class="pad4">
                    <div class="bg-ffffff bora25 box-shadow-10 pad4">
                        <ul class="flex-box text-nowrap tc">
                            <li class="pad2-0 center-number-item po-rel">
                                <p class="c-red font5">0</p>
                                <p class="pad2-0-0 c-grey">金额</p>
                                </li>
                            <li class="pad2-0 center-number-item po-rel">
                                <p class="c-red font5">0</p>
                                <p class="pad2-0-0 c-grey">兑换券</p>
                            </li>
                            <li class="pad2-0 center-number-item po-rel">
                                <p class="c-red font5">0</p>
                                <p class="pad2-0-0 c-grey">红包余量</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="center-feature-list">
            <div class="pad0-4">
                <div class="pad0-4">
                    <ul class="flex-box tc text-nowrap pad0-0-6 bb-ececec">
                        <li class="center-feature-item">
                            <router-link tag="div" to="/share">
                                <a class="center-feature-item-1">
                                    <span>分享人</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="center-feature-item flex-item-2">
                            <router-link tag="div" to="/fans">
                                <a class="center-feature-item-2">
                                    <span>粉丝圈</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="center-feature-item">
                            <router-link tag="div" to="/userinfo">
                                <a class="center-feature-item-3">
                                    <span>我的资料</span>
                                </a>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="flex-box tc text-nowrap pad6-0 bb-ececec">
                        <li class="center-feature-item">
                            <router-link tag="div" to="/withdraw-list">
                                <a class="center-feature-item-4">
                                    <span>累计提现</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="center-feature-item flex-item-2">
                            <router-link tag="div" to="/withdraw">
                                <a class="center-feature-item-5">
                                    <span>我要提现</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="center-feature-item">
                            <router-link tag="div" to="/myredpack">
                                <a class="center-feature-item-6">
                                    <span>我的红包</span>
                                </a>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="flex-box tc text-nowrap pad6-0">
                        <li class="center-feature-item">
                            <router-link tag="div" to="/entering">
                                <a class="center-feature-item-7">
                                    <span>商家入驻</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="center-feature-item flex-item-2">
                            <router-link tag="div" to="/">
                                <a class="center-feature-item-8">
                                    <span>同步微信</span>
                                </a>
                            </router-link>
                        </li>
                        <li class="center-feature-item">
                            <router-link tag="div" to="/">
                                <a class="center-feature-item-9">
                                    <span>重新登录</span>
                                </a>
                            </router-link>
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
    }
}
</script>
