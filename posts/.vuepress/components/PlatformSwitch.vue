<template>
  <div ref="container" class="platform-switch">
    <slot />
  </div>
</template>

<script>
import { platformCheck } from "./utils";

export default {
  data() {
    return { display: false };
  },
  mounted() {
    const nodesMap = Object.fromEntries(
      [...this.$refs.container.children].map((i) => [
        i.getAttribute("platform"),
        i,
      ])
    );

    const showIt = (el) => el && (el.style.display = "unset");

    for (const platform in nodesMap) {
      if (platformCheck(platform)) return showIt(nodesMap[platform]);
    }

    showIt(nodesMap.others);
  },
};
</script>

<style scoped>
.platform-switch > * {
  display: none;
}
</style>
