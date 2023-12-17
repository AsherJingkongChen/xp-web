<template>
  <article class="home-view">
    <h1 class="heading">
      <span class="block">Let’s preview </span>
      <span class="block">your files</span>
    </h1>
    <button class="preview">
      <img
        class="icon"
        alt="Preview"
        title="Click me to open your files"
        src="@/icons/preview.svg" />
    </button>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

article.home-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
    cursor: default;
    position: relative;
    padding: $BaseSize;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Play;
    font-size: 3 * $BaseSize;
    font-weight: 700;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    background: $ColorLinearHeadingCool;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
