<template>
  <Head>
    <title>{{ title }}</title>
    <meta
      v-for="{ name, content } in namedMetadata"
      :key="name"
      :name="name"
      :content="content" />
    <meta
      name="google-site-verification"
      :content="VITE_GOOGLE_SITE_VERIFICATION_TOKEN" />
  </Head>
  <header class="header">
    <RouterLink
      to="/"
      class="brand"
      title="Go to Home Page">
      <img
        class="icon"
        alt="Home"
        src="@/icons/brand.svg"
        @contextmenu.prevent.stop />
    </RouterLink>
  </header>
  <nav class="nav">
    <RouterLink
      to="/guide"
      class="nav-option to-guide"
      title="Go to Guide Page">
      <div class="icon"></div>
      <div class="nav-name">Guide</div>
    </RouterLink>
    <RouterLink
      to="/info"
      class="nav-option to-info"
      title="Go to Info Page">
      <div class="icon"></div>
      <div class="nav-name">Info</div>
    </RouterLink>
  </nav>
  <main
    ref="mainElement"
    class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { Head } from '@unhead/vue/components';
import { computed, ref } from 'vue';

/* Constants */

const { VITE_GOOGLE_SITE_VERIFICATION_TOKEN } = import.meta.env;

/* States */

const mainElement = ref<HTMLElement | null>(null);
const route = useRoute();

/* Computed States */

const title = computed(() => {
  let name = route.name?.toString();
  name = name ? ` - ${name}` : '';
  return `${import.meta.env.VITE_APP_TITLE_PREFIX}${name}`;
});
const namedMetadata = computed(() =>
  Object.entries(route.meta)
    .map(([name, value]) => ({ name, content: value?.toString() ?? '' }))
    .filter(({ name, content }) => content && name !== 'state'),
);

/** Watchers **/

/* Lifecycle Hooks */
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '@/styles/main.scss';

header.header {
  position: relative;
  .brand {
    cursor: url('@/icons/paperplane.svg'), pointer;
    position: relative;
    width: min-content;
    padding: 1.25 * $BaseSize 1 * $BaseSize;
    .icon {
      position: relative;
      width: 4 * $BaseSize;
      height: 2 * $BaseSize;
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
  $ScrollBarWidth: 0.5 * $BaseSize;
  $ScrollBarBorder: 0.1 * $ScrollBarWidth;
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: $BaseSize;
  display: grid;
  place-items: center;
  overflow: auto;
  scrollbar-width: $ScrollBarWidth;
  scrollbar-color: $ColorOutline $ColorBorder;
  scrollbar-gutter: stable;
  article {
    padding: $BaseSize;
  }
  &::-webkit-scrollbar {
    width: $ScrollBarWidth;
  }
  &::-webkit-scrollbar-track {
    background-color: $ColorBorder;
    border-radius: 0.5 * $ScrollBarWidth;
  }
  &::-webkit-scrollbar-thumb {
    background: $ColorOutline;
    border-radius: 0.5 * $ScrollBarWidth;
    border: $ScrollBarBorder solid $ColorBorder;
    box-shadow: inset 0 0 2 * $ScrollBarBorder $ColorBorder;
    background-clip: content-box;
    -webkit-background-clip: content-box;
  }
}
</style>
