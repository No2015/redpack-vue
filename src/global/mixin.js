const mixin = {
  activated() {
    const scrollTop = this.$route.meta.scrollTop;
    const $content = document.querySelector('#content');
    if (scrollTop && $content) {
      $content.scrollTop = scrollTop;
    }
  }
}

export default mixin
