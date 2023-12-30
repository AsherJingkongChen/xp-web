<script lang="ts">
  import Head from '$lib/components/Head.svelte';
</script>

<Head
  title="Guide - Learn how to preview files"
  description={'' +
    "Master XP's file preview capabilities " +
    'on the guide page. ' +
    'Discover expert tips and tricks to enhance ' +
    'your file previewing experience effortlessly.'} />

<div class="wrapper">
  <h1 class="heading">
    <span>Guide</span>
  </h1>
  <section class="content">
    <span class="block">1. Click the preview button</span>
    <span class="block">2. Select your files</span>
    <span class="block">3. Click the open button</span>
    <span class="block">4. Click the play button</span>
    <span class="block">5. Enjoy your files</span>
    <span class="block">6. Click the stop button</span>
    <span class="block">7. Click the close button</span>
    <span class="block">8. Click the preview button</span>
    <span class="block">9. Repeat from step 2</span>
    <span class="block"
      >10. Select your files and it should be a
      very_super_extraordinary_lengthy_text_without_breaks</span>
    <span class="block">11. Click the open button</span>
    <span class="block">12. Click the play button</span>
    <span class="block">13. Enjoy your files</span>
    <span class="block">14. Click the stop button</span>
    <span class="block">15. Click the close button</span>
    <span class="block">16. Click the preview button</span>
    <span class="block">17. Repeat from step 10</span>
    <span class="block">18. Select your files</span>
    <span class="block">19. Click the open button</span>
    <span class="block">20. Click the play button</span>
    <span class="block">21. Enjoy your files</span>
    <span class="block">22. Click the stop button</span>
    <span class="block">23. Click the close button</span>
    <span class="block">24. Click the preview button</span>
    <span class="block">25. Repeat from step 18</span>
    <span class="block">26. Select your files</span>
    <span class="block">27. Click the open button</span>
    <span class="block">28. Click the play button</span>
    <span class="block">29. Enjoy your files</span>
    <span class="block">30. Click the stop button</span>
    <span class="block">31. Click the close button</span>
    <span class="block">32. Click the preview button</span>
    <span class="block">33. Repeat from step 26</span>
    <span class="block">34. Select your files</span>
    <span class="block">35. Click the open button</span>
    <span class="block">36. Click the play button</span>
    <span class="block">37. Enjoy your files</span>
    <span class="block">38. Click the stop button</span>
    <span class="block">39. Click the close button</span>
    <span class="block">40. Click the preview button</span>
    <span class="block">41. Repeat from step 34</span>
    <span class="block">42. Select your files</span>
    <span class="block">43. Click the open button</span>
    <span class="block">44. Click the play button</span>
    <span class="block">45. Enjoy your files</span>
    <span class="block">46. Click the stop button</span>
    <span class="block">47. Click the close button</span>
    <span class="block">48. Click the preview button</span>
    <span class="block">49. Repeat from step 42</span>
    <span class="block">50. Select your files</span>
  </section>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: $BaseSize;
    background-color: color.change(
      $ColorTextWarm,
      $alpha: 0.15
    );
    .heading {
      @include colorLinearGradient($color: $ColorTextWarm);
      @include heading;
    }
    .content {
      position: relative;
      padding-bottom: $BaseSize;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
