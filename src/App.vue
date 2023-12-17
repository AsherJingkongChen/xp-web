<template>
  <Head>
    <title>{{ title }}</title>
    <meta
      name="description"
      :content="description" />
    <meta
      v-if="VITE_GOOGLE_SITE_VERIFICATION_TOKEN"
      name="google-site-verification"
      :content="VITE_GOOGLE_SITE_VERIFICATION_TOKEN" />
  </Head>
  <header class="header">
    <RouterLink
      class="brand"
      to="/">
      <img
        class="icon"
        alt="XP Brand"
        title="Go to Home Page"
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
  <main
    ref="mainElement"
    class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { Head } from '@unhead/vue/components';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

/* Lifecycle hooks */

onMounted(() => {
  overflowDetectorForMutation.observe(mainElement.value!, {
    characterData: true,
    childList: true,
    subtree: true,
  });
  overflowDetectorForResize.observe(mainElement.value!);
});

onBeforeUnmount(() => {
  overflowDetectorForMutation.disconnect();
  overflowDetectorForResize.disconnect();
});

/* Constants */

const { VITE_GOOGLE_SITE_VERIFICATION_TOKEN } = import.meta.env;

/* States */

const mainElement = ref<HTMLElement | null>(null);
const route = useRoute();

/* Computed values */

const title = computed(() => {
  let name = route.name?.toString();
  name = name ? ` - ${name}` : '';
  return `${import.meta.env.VITE_APP_TITLE_PREFIX}${name}`;
});
const description = computed(() => route.meta.description?.toString());

/* Watchers */

const overflowDetectorForMutation = new MutationObserver((entries) => {
  for (const { target } of entries) {
    setIfOverflow(target);
  }
});

const overflowDetectorForResize = new ResizeObserver((entries) => {
  for (const { target } of entries) {
    setIfOverflow(target);
  }
});

/* Utilities */

function setIfOverflow(target: Node): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  if (
    target.offsetHeight < target.scrollHeight ||
    target.offsetWidth < target.scrollWidth
  ) {
    target.classList.add('overflow');
    return true;
  } else {
    target.classList.remove('overflow');
    return false;
  }
}
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '@/styles/main.scss';

header.header {
  position: relative;
  width: min-content;
  .brand {
    cursor: url('@/icons/paperplane.svg'), pointer;
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
  $ScrollBarWidth: 0.3 * $BaseSize;
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.4 * $BaseSize;
  padding: $BaseSize;
  display: grid;
  place-items: center;
  overflow: auto;
  scrollbar-width: $ScrollBarWidth;
  scrollbar-color: $ColorLinearHeadingWarm;
  scrollbar-gutter: stable both-edges;
  &.overflow {
    box-shadow: 0 0 0.5 * $ScrollBarWidth $ColorBorder;
  }
  &::-webkit-scrollbar {
    width: $ScrollBarWidth;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5 * $ScrollBarWidth;
    background: $ColorBorder;
  }
}
</style>
