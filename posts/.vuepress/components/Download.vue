<template>
  <a class="download" :class="{ large, disabled }" :href="disabled?null:_href" download>
    {{ _text }}
    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3768"
      data-spm-anchor-id="a313x.7781069.0.i0" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path fill="#fff"
        d="M432 0h160c26.6 0 48 21.4 48 48v336h175.4c35.6 0 53.4 43 28.2 68.2L539.4 756.6c-15 15-39.6 15-54.6 0L180.2 452.2c-25.2-25.2-7.4-68.2 28.2-68.2H384V48c0-26.6 21.4-48 48-48z m592 752v224c0 26.6-21.4 48-48 48H48c-26.6 0-48-21.4-48-48V752c0-26.6 21.4-48 48-48h293.4l98 98c40.2 40.2 105 40.2 145.2 0l98-98H976c26.6 0 48 21.4 48 48z m-248 176c0-22-18-40-40-40s-40 18-40 40 18 40 40 40 40-18 40-40z m128 0c0-22-18-40-40-40s-40 18-40 40 18 40 40 40 40-18 40-40z"
        p-id="3769"></path>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    text: String,
    large: Boolean,
    disabled: Boolean,
  },
  computed: {
    _href() {
      if (/^(http:\/\/|https:\/\/)/.test(this.href)) return this.href;
      return "/" + encodeURI(this.href);
    },
    _text() {
      return this.text || this.href.split("/").pop();
    },
  },
};
</script>

<style scoped lang="stylus">

.download
  position relative
  height 1em
  padding-left 0.2em
  padding-right 1.6em
  margin-right 0.2em
  border-radius 1px
  border-top-left-radius 3px
  border-bottom-right-radius 3px
  background #e77055
  color white

  &>svg
    position absolute
    right 0.3em
    top 50%
    transform translateY(-50%)
    height 1em

  &.disabled
    background #d0b1ad
    cursor not-allowed
    opacity 0.5
    text-decoration none
    user-select none

  &+.download
    margin-left 1em

.download.large
  margin 1em 0
  line-height 5em
  text-decoration underline
  font-size 1.2em
  padding 1em 3.5em 1em 1.2em
  border-radius 1em
  border-bottom-left-radius 0

  &+.download
    margin-left 2em

  &>svg
    right 1em
    height 1.5em

</style>
