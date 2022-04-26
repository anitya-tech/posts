<template>
  <ClientOnly v-if="display">
    <slot />
  </ClientOnly>
</template>

<script>
import { platformCheck } from "./utils";

export default {
  data() {
    return { display: false };
  },
  props: ["platform", "to"],
  beforeMount() {
    const { platform, to } = this.$props;
    if (platformCheck(platform)) {
      if (to) {
        window.location.href = to;
        return;
      }
      this.display = true;
    }
  },
};
</script>
