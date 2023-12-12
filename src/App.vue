<template>
  <header class="header">
    <RouterLink
      class="brand"
      to="/">
      <img
        class="icon"
        alt="XP Brand"
        title="Go Home"
        src="@/icons/brand.svg"
        @contextmenu.prevent.stop />
    </RouterLink>
  </header>
  <nav class="nav">
    <RouterLink
      class="nav-option to-guide"
      to="/guide">
      <div class="icon"></div>
      <div class="nav-name">Guide</div>
    </RouterLink>
    <RouterLink
      class="nav-option to-info"
      to="/info">
      <div class="icon"></div>
      <div class="nav-name">Info</div>
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
@import '@/styles/main.scss';

header.header {
  position: relative;
  width: min-content;
  .brand {
    cursor: pointer;
    position: relative;
    width: min-content;
    padding: 1.25 * $BaseSize 1 * $BaseSize;
    display: flex;
    .icon {
      position: relative;
      width: 4 * $BaseSize;
      height: 2 * $BaseSize;
      min-width: max-content;
      color: $ColorTextCool;
      font-size: 0.75 * $BaseSize;
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
  @include mediaQueryPortrait {
    grid-area: 3 / 1 / 4 / 3;
    width: 100%;
    justify-content: space-between;
  }
  .nav-option {
    position: relative;
    padding: 1.25 * $BaseSize 1 * $BaseSize;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5 * $BaseSize;
    font-weight: 600;

    color: $ColorTextCool;
    @media screen and (orientation: portrait) {
      color: $ColorTextWarm;
    }
    &.to-guide {
      cursor: url('@/icons/document.svg'), context-menu;
      .icon {
        background-image: url('@/icons/guide-cool.svg');
        @media screen and (orientation: portrait) {
          background-image: url('@/icons/guide-warm.svg');
        }
      }
    }
    &.to-info {
      cursor: url('@/icons/radar.svg'), help;
      .icon {
        background-image: url('@/icons/info-cool.svg');
        @media screen and (orientation: portrait) {
          background-image: url('@/icons/info-warm.svg');
        }
      }
    }
    .icon {
      position: relative;
      width: #{$LineHeight}em;
      height: #{$LineHeight}em;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
main.main {
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.4 * $BaseSize;
  padding: $BaseSize;
  display: grid;
  place-items: center;
  overflow: scroll;
  box-shadow: 0 0 0.2 * $BaseSize $ColorBorder;
}
</style>
