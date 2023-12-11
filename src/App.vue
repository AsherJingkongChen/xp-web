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
    <h1 class="center-heading">
      <span class="center-header-block">Let’s preview</span>
      <span class="center-header-block">your files</span>
    </h1>
    <button class="preview">
      <img
        class="icon"
        alt="Preview"
        src="@/icons/preview.svg" />
    </button>
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '@/styles/base.scss';

header.header {
  order: 1;
}
nav.nav {
  order: 3;
}
main.main {
  order: 2;
}
header.header {
  position: relative;
  width: min-content;
  .brand {
    position: relative;
    width: min-content;
    padding: $BasePadding;
    display: flex;
    .icon {
      position: relative;
      width: 4em;
      height: 2em;
    }
  }
}
nav.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: min-content;
  justify-content: right;
  @media screen and (orientation: portrait) {
    width: 100%;
    justify-content: space-between;
  }
  .nav-option {
    position: relative;
    padding: $BasePadding;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: math.div($BasePadding, 2);
    font-weight: 600;

    color: $ColorTextCool;
    @media screen and (orientation: portrait) {
      color: $ColorTextWarm;
    }
    .icon {
      position: relative;
      width: #{$LineHeight}em;
      height: #{$LineHeight}em;

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
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .center-heading {
    position: relative;
    padding: $BasePadding;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2em;
    background: $ColorLinearHeadingCool;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Play;
    font-weight: 700;
  }
  button.preview {
    cursor: pointer;
    position: relative;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon {
      position: relative;
      width: 4em;
      height: 4em;
    }
  }
}
</style>
