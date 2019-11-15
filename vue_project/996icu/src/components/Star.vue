<template>
  <div id="star">
    <!-- Place this tag where you want the button to render. -->
    <github-button href="https://github.com/ntkme/github-buttons" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</github-button>
  </div>
</template>

<script>
import GithubButton from 'vue-github-button'
export default {
  name: 'Star',
  components: {
    GithubButton
  }
}
</script>

<style scoped>
#star{
    height: 31px;
    width: 123px;
    margin: 0 auto;
}
</style>
