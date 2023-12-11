<template>
  <header class="header">
    <RouterLink
      class="brand"
      to="/">
      <img
        class="icon"
        alt="XP Brand"
        src="@/icons/brand.svg"
        @contextmenu.prevent.stop />
    </RouterLink>
  </header>
  <nav class="nav">
    <RouterLink
      class="nav-option"
      to="/info">
      <div
        class="icon info-icon"
        alt="@"></div>
      <div class="nav-name">Info</div>
    </RouterLink>
    <RouterLink
      class="nav-option"
      to="/guide">
      <div
        class="icon guide-icon"
        alt="@"></div>
      <div class="nav-name">Guide</div>
    </RouterLink>
  </nav>
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '@/styles/base.scss';

header.header {
  position: relative;
  width: min-content;
  .brand {
    position: relative;
    width: min-content;
    padding: $BaseSize;
    display: flex;
    .icon {
      position: relative;
      width: 4 * $BaseSize;
      height: 2 * $BaseSize;
    }
  }
}
nav.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: right;

  grid-area: 1 / 2 / 2 / 3;
  width: min-content;
  justify-content: right;
  @media screen and (orientation: portrait) {
    grid-area: 3 / 1 / 4 / 3;
    width: 100%;
    justify-content: space-between;
  }
  .nav-option {
    position: relative;
    padding: $BaseSize;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5 * $BaseSize;
    font-weight: 600;

    color: $ColorTextCool;
    @media screen and (orientation: portrait) {
      color: $ColorTextWarm;
    }
    .icon {
      position: relative;
      width: #{$LineHeight}em;
      height: #{$LineHeight}em;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      &.guide-icon {
        background-image: url('@/icons/guide-cool.svg');
      }
      &.info-icon {
        background-image: url('@/icons/info-cool.svg');
      }
      @media screen and (orientation: portrait) {
        &.guide-icon {
          background-image: url('@/icons/guide-warm.svg');
        }
        &.info-icon {
          background-image: url('@/icons/info-warm.svg');
        }
      }
    }
  }
}
main.main {
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5 * $BaseSize;
  display: grid;
  place-items: center;
  overflow: scroll;
  box-shadow: 0 0 0.5 * $BaseSize $ColorBorder;
}
</style>
