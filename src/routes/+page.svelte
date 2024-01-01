<script lang="ts">
  import Head from '$lib/components/Head.svelte';
</script>

<Head
  title="Home - Any file previewer"
  description={'' +
    'Explore XP to preview various files. ' +
    'Start your journey on the home page for ' +
    'an intuitive and versatile file preview experience.'} />

<h1 class="heading">
  <span>Any File</span>
  <span>To Preview?</span>
</h1>

<button
  class="preview"
  title="Choose files to preview" />

<style lang="scss">
  .heading {
    @include colorLinearGradient(
      $color: $ColorLinearHeadingCool
    );
    @include heading;
  }
  button.preview {
    @include imageButton(
      $image: url('/assets/icons/preview.svg'),
      $cursor: (
        url('/assets/icons/add-file.svg'),
        copy,
      ),
      $width: 4 * $BaseSize,
      $height: 4 * $BaseSize,
    );
  }
</style>
