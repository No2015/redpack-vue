<template>
  <div class="user-info wrap bg-ffffff">
    <Content />
  </div>
</template>

<script>
import Content from '@/components/userinfo/index'
export default {
  name: 'UserInfo',
  components: {
    Content
  },
  created(){
    this.$store.dispatch('initUserInfo')
  },
  data () {
    return {}
  }
}
</script>
