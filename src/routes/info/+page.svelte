<script lang="ts">
  import Head from '$lib/components/Head.svelte';
</script>

<Head
  title="Info - About your file previewer"
  description={'' +
    'Get insights into XP, ' +
    'your any file previewer. ' +
    'Visit the info page for more details ' +
    'and understand the uniqueness of this tool.'} />

<h1 class="heading">
  <span>Info</span>
</h1>

<section class="content">
  <h5>It's Your File Previewer</h5>
  <p>
    <span>*But It's Not Ready Yet*</span>
  </p>
</section>

<style lang="scss">
  .heading {
    @include colorLinearGradient(
      $color: $ColorLinearHeadingWarm
    );
    @include heading;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
