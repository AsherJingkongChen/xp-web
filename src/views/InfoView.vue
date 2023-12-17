<template>
  <article class="info-view">
    <h1 class="heading">
      <span class="block">Info</span>
      <span class="block"
        >Nothing_to_show_but_I_am_a_very_long_heading</span
      >
    </h1>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

article.info-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $ColorTextCool;
    font-family: Play;
    font-size: 3 * $BaseSize;
    font-weight: 700;
    text-align: center;
    user-select: none;
  }
}
</style>
