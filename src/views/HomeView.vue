<template>
  <article class="home-view">
    <Heading
      class="heading"
      :lines="['Let’s preview ', 'your files']" />
    <button class="preview">
      <img
        class="icon"
        alt="Preview"
        title="Click me to open your files"
        src="@/icons/preview.svg" />
    </button>
  </article>
</template>

<script setup lang="ts">
import Heading from '@/components/Heading.vue';
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';

article.home-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
    @include colorLinearGradient($ColorLinearHeadingCool);
  }
  button.preview {
    position: relative;
    padding: $BaseSize;
    .icon {
      cursor: url('@/icons/add-file.svg'), copy;
      position: relative;
      width: 4 * $BaseSize;
      height: 4 * $BaseSize;
      min-width: max-content;
      color: $ColorTextWarm;
      font-size: 1.25 * $BaseSize;
    }
  }
}
</style>
