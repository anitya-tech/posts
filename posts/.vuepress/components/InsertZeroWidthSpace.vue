<template>
  <ClientOnly>
    <div>
      <p>原文本：</p>
      <textarea
        rows="10"
        style="width: 100%; font-size: 1em"
        v-model="text"
        placeholder="请在此输入动态文本"
      />

      <p>转换后的文本：</p>
      <div style="border: 1px dashed white; padding: 2px; min-height: 1em">
        {{ insertedText }}
      </div>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  computed: {
    insertedText() {
      return [...this.text].join("​");
    },
  },
};
</script>
