<template>
  <h1 class="heading">
    <span
      v-for="(line, index) in lines"
      :key="index"
      >{{ line }}</span
    >
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  lines: string[];
}>();
</script>

<style scoped lang="scss">
@import '@/styles/base.scss';

.heading {
  cursor: default;
  position: relative;
  padding: $BaseSize;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Play, sans-serif;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
}
</style>
