<template>
  <article class="guide-view">
    <h1 class="guide-heading">
      <span class="heading-block">Guide</span>
    </h1>
    <p class="guide-content">
      <span class="guide-block">1. Click the preview button</span>
      <span class="guide-block">2. Select your files</span>
      <span class="guide-block">3. Click the open button</span>
      <span class="guide-block">4. Click the play button</span>
      <span class="guide-block">5. Enjoy your files</span>
      <span class="guide-block">6. Click the stop button</span>
      <span class="guide-block">7. Click the close button</span>
      <span class="guide-block">8. Click the preview button</span>
      <span class="guide-block">9. Repeat from step 2</span>
      <span class="guide-block">10. Select your files</span>
      <span class="guide-block">11. Click the open button</span>
      <span class="guide-block">12. Click the play button</span>
      <span class="guide-block">13. Enjoy your files</span>
      <span class="guide-block">14. Click the stop button</span>
      <span class="guide-block">15. Click the close button</span>
      <span class="guide-block">16. Click the preview button</span>
      <span class="guide-block">17. Repeat from step 10</span>
      <span class="guide-block">18. Select your files</span>
      <span class="guide-block">19. Click the open button</span>
      <span class="guide-block">20. Click the play button</span>
      <span class="guide-block">21. Enjoy your files</span>
      <span class="guide-block">22. Click the stop button</span>
      <span class="guide-block">23. Click the close button</span>
      <span class="guide-block">24. Click the preview button</span>
      <span class="guide-block">25. Repeat from step 18</span>
    </p>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/styles/base.scss';

.guide-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $ColorTextWarm;
  .guide-heading {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Play;
    font-size: 3 * $BaseSize;
    font-weight: 700;
    text-align: center;
    user-select: none;
  }
  .guide-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
