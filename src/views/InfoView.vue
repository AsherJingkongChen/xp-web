<template>
  <article class="info-view">
    <Heading
      class="heading"
      :lines="['Info', 'Nothing_to_show_but_I_am_a_very_long_heading']" />
  </article>
</template>

<script setup lang="ts">
import Heading from '@/components/Heading.vue';
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';

article.info-view {
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
}
</style>
