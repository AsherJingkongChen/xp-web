<template>
  <article class="page-not-found-view">
    <Heading
      class="heading"
      :lines="['Oops!', 'Page not found']" />
    <button
      class="go-back"
      title="Go to the last page"
      @click="router.back">
      <img
        class="icon"
        alt="Go back"
        src="@/icons/navigate-back.svg" />
    </button>
  </article>
</template>

<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import { useRouter } from 'vue-router';

/* States */

const router = useRouter();
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';

article.page-not-found-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
    @include colorLinearGradient($ColorLinearHeadingCool);
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
