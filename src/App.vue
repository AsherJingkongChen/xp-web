<template>
  <header>
    <RouterLink
      class="brand"
      to="/">
      <img
        class="icon"
        alt="XP Brand"
        src="@/icons/brand.svg"
        @contextmenu.stop.prevent />
    </RouterLink>
  </header>
  <nav class="nav-bar">
    <RouterLink
      class="nav-opt"
      to="/info">
      <img
        class="icon"
        alt="@"
        src="@/icons/info.svg" />
      <div class="nav-name">Info</div>
    </RouterLink>
    <RouterLink
      class="nav-opt"
      to="/guide">
      <img
        class="icon"
        alt="@"
        src="@/icons/document.svg" />
      <div class="nav-name">Guide</div>
    </RouterLink>
  </nav>
  <div
    class="home-page-android-l"
    hidden>
    <div class="content">
      <div class="title">
        <b class="lets-preview-your-container">
          <p class="lets-preview">Let’s preview</p>
          <p class="lets-preview">your files</p>
        </b>
      </div>
      <div class="entry-button">
        <img
          class="preview-icon"
          alt=""
          src="@/icons/preview.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '@/styles/base.scss';

header {
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
.nav-bar {
  position: absolute;
  top: 0;
  right: 0;
  width: min-content;
  padding: $BasePadding;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  color: $ColorTextWarm;
  .nav-opt {
    position: relative;
    padding: $BasePadding;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: math.div($BasePadding, 2);
    .nav-name {
      position: relative;
      font-weight: 500;
    }
    .icon {
      position: relative;
      width: #{$LineHeight}em;
      height: #{$LineHeight}em;
    }
  }
}
@media screen and (orientation: landscape) {
  .nav-bar {
    top: 0;
    bottom: unset;
    width: min-content;
    justify-content: right;
  }
}
@media screen and (orientation: portrait) {
  .nav-bar {
    top: unset;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
  }
}
.lets-preview {
  margin: 0;
}
.lets-preview-your-container {
  position: relative;
  font-size: 2em;
  background: linear-gradient(180deg, #c5afcf, #8a609f 71.88%, #503050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.preview-icon {
  position: relative;
  width: 3.63em;
  height: 4em;
}
.entry-button {
  width: 4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0em 0.19em;
  box-sizing: border-box;
}
.content {
  position: absolute;
  height: calc(100% - 624px);
  width: calc(100% - 100px);
  top: 19.5em;
  right: 3.13em;
  bottom: 19.5em;
  left: 3.13em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.25em;
}
.home-page-android-l {
  position: relative;
  background: $ColorLinearBackground, $ColorBlack;
  width: 100%;
  height: 50em;
  overflow: hidden;
  text-align: center;
  color: #a3998f;
  font-family: Play;
}
</style>

<style>
/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px;
  font-weight: normal;
} */

@media (min-width: 1024px) {
  /* body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  } */
}
</style>

<style scoped>
/* 
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
