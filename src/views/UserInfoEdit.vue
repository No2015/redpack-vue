<template>
  <div class="user-info-edit wrap bg-ffffff">
    <Content />
  </div>
</template>

<script>
import Content from '@/components/userinfoedit/index'
export default {
  name: 'UserInfoEdit',
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
