<template>
  <article class="guide-view">
    <h1 class="guide-heading">
      <span class="heading-block">Guide</span>
      <span class="heading-block">Nothing to learn</span>
    </h1>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

.guide-heading {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $ColorTextWarm;
  font-family: Play;
  font-size: 3 * $BaseSize;
  font-weight: 700;
  text-align: center;
  user-select: none;
}
</style>