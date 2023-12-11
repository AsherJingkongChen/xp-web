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
      <span class="guide-block">26. Select your files</span>
      <span class="guide-block">27. Click the open button</span>
      <span class="guide-block">28. Click the play button</span>
      <span class="guide-block">29. Enjoy your files</span>
      <span class="guide-block">30. Click the stop button</span>
      <span class="guide-block">31. Click the close button</span>
      <span class="guide-block">32. Click the preview button</span>
      <span class="guide-block">33. Repeat from step 26</span>
      <span class="guide-block">34. Select your files</span>
      <span class="guide-block">35. Click the open button</span>
      <span class="guide-block">36. Click the play button</span>
      <span class="guide-block">37. Enjoy your files</span>
      <span class="guide-block">38. Click the stop button</span>
      <span class="guide-block">39. Click the close button</span>
      <span class="guide-block">40. Click the preview button</span>
      <span class="guide-block">41. Repeat from step 34</span>
      <span class="guide-block">42. Select your files</span>
      <span class="guide-block">43. Click the open button</span>
      <span class="guide-block">44. Click the play button</span>
      <span class="guide-block">45. Enjoy your files</span>
      <span class="guide-block">46. Click the stop button</span>
      <span class="guide-block">47. Click the close button</span>
      <span class="guide-block">48. Click the preview button</span>
      <span class="guide-block">49. Repeat from step 42</span>
      <span class="guide-block">50. Select your files</span>
    </p>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'sass:color'; // debug
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
  background: color.change($ColorDeepAmethyst, $alpha: 0.2); // debug
  .guide-heading {
    position: relative;
    padding-top: $BaseSize; // debug
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Play;
    font-size: 3 * $BaseSize;
    font-weight: 700;
    text-align: center;
    user-select: none;
  }
  .guide-content { // debug
    position: relative;
    padding-bottom: $BaseSize;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
