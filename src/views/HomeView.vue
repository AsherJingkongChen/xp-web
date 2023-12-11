<template>
  <article class="home-view">
    <h1 class="home-heading">
      <span class="heading-block">Let’s preview</span>
      <span class="heading-block">your files</span>
    </h1>
    <button class="preview">
      <img
        class="icon"
        alt="Preview"
        src="@/icons/preview.svg" />
    </button>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

.home-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $BaseSize;
  .home-heading {
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
    background: $ColorLinearHeadingCool;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  button.preview {
    cursor: pointer;
    position: relative;
    padding: $BaseSize;
    .icon {
      position: relative;
      width: 4 * $BaseSize;
      height: 4 * $BaseSize;
    }
  }
}
</style>
