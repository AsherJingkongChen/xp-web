<template>
  <article class="page-not-found-view">
    <h1 class="heading">
      <p class="block">Page Not Found</p>
    </h1>
    <button class="go-back">
      <img
        class="icon"
        alt="Preview"
        title="Go to the previous page"
        src="@/icons/preview.svg" />
    </button>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

.page-not-found-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
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
  button.go-back {
    position: relative;
    padding: $BaseSize;
    .icon {
      cursor: url('@/icons/paperplane.svg'), pointer;
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
