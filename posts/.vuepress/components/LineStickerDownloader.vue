<template>
  <ClientOnly>
    <div>
      <p>请在此输入 Sticker 地址：</p>
      <input style="width: 100%; font-size: 1em" v-model="text" placeholder="https://store.line.me/sticke..." />
      <template v-if="text">
        <p v-if="!stickerId">链接格式似乎不对...</p>
        <template v-else>
          <Download large text="下载静态 Sticker" href="`https://stickershop.line-scdn.net/stickershop/v1/product/${stickerId}/PC/stickers.zip`" />
          <Download large text="下载动态 Sticker" href="`https://stickershop.line-scdn.net/stickershop/v1/product/${stickerId}/PC/stickerpack.zip`" />
        </template>
      </template>
    </div>
  </ClientOnly>
</template>

<script>
import Download from './Download.vue';

export default {
  components: { Download },
  data() {
    return {
      text: "",
    };
  },
  computed: {
    stickerId() {
      const [, result] = this.text.match(/stickershop\/product\/(\d+)/) ?? [];
      return result
    },
  },
};
</script>

<style scoped>
.download-link {
  font-size: 1.2em;
}
</style>
