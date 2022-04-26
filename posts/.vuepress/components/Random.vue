<template>
  <div
    ref="container"
    :style="{ display: display ? 'block' : 'none' }"
    @click="shuffle"
  >
    <slot />
  </div>
</template>

<script>
import shuffle from "lodash.shuffle";

export default {
  data() {
    return { display: false, container: null, nodes: [] };
  },
  props: ["number"],
  methods: {
    shuffle() {
      [...this.container.children].forEach((n) =>
        this.container.removeChild(n)
      );
      const picked = shuffle(this.nodes).slice(-Number(this.$props.number));
      picked.forEach((n) => this.container.appendChild(n));
    },
  },
  async mounted() {
    await this.$nextTick();
    this.container = this.$refs.container;

    findContainer: while (true) {
      switch (this.container.children.length) {
        case 0:
          return;
        case 1:
          this.container = this.container.children[0];
          break;
        default:
          break findContainer;
      }
    }

    this.nodes = [...this.container.children];
    this.shuffle();
    this.display = true;
  },
};
</script>
