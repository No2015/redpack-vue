<template>
    <div class="footer bg-fd5e44">
        <div>
			<ul class="flex-box tc font3 text-nowrap">
				<li>
                    <router-link tag="div" to="/">
                        <a class="footer-menu footer-menu-1 c-white">
                            <span class="opacity-8">中奥商城</span>
                        </a>
                    </router-link>
                            </li>
                            <li>
                    <router-link tag="div" to="/merchants-list">
                        <a class="footer-menu footer-menu-2 c-white">
                            <span class="opacity-8">附近商家</span>
                        </a>
                    </router-link>
                            </li>
                            <li>
                    <router-link tag="div" to="/">
                        <a class="footer-menu footer-menu-3 c-white">
                            <span class="opacity-8">个人中心</span>
                        </a>
                    </router-link>
                            </li>
                            <li>
                    <router-link tag="div" to="/addredpack">
                        <a class="footer-menu footer-menu-4 c-white">
                            <span class="opacity-8">发红包</span>
                        </a>
                    </router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {}
    }
}
</script>

