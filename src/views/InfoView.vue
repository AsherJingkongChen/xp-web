<template>
  <article class="info-view">
    <h1 class="info-heading">
      <span class="heading-block">Info</span>
      <span class="heading-block">Nothing to show</span>
    </h1>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

.info-heading {
  position: relative;
  width: 100%;
  height: 100%;
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
</style>