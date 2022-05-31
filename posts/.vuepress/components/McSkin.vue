<template>
  <div class="mcskin" :style="{ width: size.width + 'px', height: size.height + 'px' }">
    <slot />
    <div class="mcskin-loading" v-if="loading">加载中...</div>
    <div class="mcskin-canvas" ref="mcSkinContainer"></div>
  </div>
</template>

<script>
const loadJS = (url) =>
  new Promise((resolve, reject) => {
    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    head.appendChild(script);
  });

export default {
  data() {
    return {
      loading: true,
    };
  },
  props: ["user", "width", "background"],
  computed: {
    size() {
      const width = Number(this.$props.width);
      const height = Math.floor(width * 0.7609710550887021);
      return { width, height };
    },
  },
  async mounted() {
    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js");
    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/three.js/94/three.min.js");
    await loadJS(
      "https://cdn.jsdelivr.net/gh/InventivetalentDev/MineRender@1.4.6/dist/skin.min.js"
    );
    const skinRender = new SkinRender(
      {
        // autoResize: true,
        canvas: this.size,
        render: {
          taa: true,
        },
        controls: {
          enabled: true,
          zoom: true,
          rotate: true,
          pan: true,
        },
        // forceContext: true,
      },
      this.$refs.mcSkinContainer
    );
    skinRender.render(this.$props.user, () => {
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.mcskin {
  position: relative;
}
.mcskin > img {
  position: absolute;
  z-index: -1;
}
.mcskin-loading {
  font-size: 32px;
  padding: 32px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
}
</style>
