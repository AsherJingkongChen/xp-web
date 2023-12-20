<template>
  <article class="home-view">
    <Heading
      class="heading"
      :lines="['Any File', 'To Preview?']" />
    <button
      class="preview"
      title="Choose files to preview">
      <img
        class="icon"
        alt="Choose files to preview"
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
