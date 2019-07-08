<template>
  <div class="home wrap bg-ffffff">
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from '@/components/home/index'
import Footer from '@/components/home/footer'
import Mixin from '@/global/mixin.js'
export default {
  name: 'Home',
  mixins: [Mixin],
  components: {
    Content,
    Footer
  },
  data () {
    return {}
  }
}
</script>
