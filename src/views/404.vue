<template>
  <div class="page-404 wrap bg-ffffff">
    <div class="pad4">
      <div class="pad4">
        <img src="@/assets/images/notfound.gif" alt="">
        <div class="tc pad4-0 c-grey">禁止入内，即将离开! {{ time }}秒</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'P404',
  components: {},
  data () {
    return {
      time: 3,
      timer: null
    }
  },
  created(){
    this.run()
  },
  methods: {
    run(){
      this.timer = setInterval(() => {
        this.time --
        if(this.time <= 0) {
          clearInterval(this.timer)
          this.timer = null
          this.$router.replace('/')
        }
      }, 1e3)
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.timer){
      clearInterval(this.timer)
      this.timer = null
    }
    next()
  }
}
</script>
