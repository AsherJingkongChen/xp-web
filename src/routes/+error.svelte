<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { page } from '$app/stores';
  import { capitalizeEach } from '$lib/utils';

  const DEFAULT_MESSAGE = 'Not Implemented';
  export let message = DEFAULT_MESSAGE;

  $: message = capitalizeEach($page.error?.message ?? message);
</script>

<Head
  title={`Oops! ${message} - ` +
    'Your file previewer has a problem'}
  description={'' +
    "Oops! The page you're looking for " +
    `has a problem (${message}). ` +
    'XP recommends going back to the previous page. ' +
    "Let's explore more of your file previewer!"} />

<svelte:head>
  <meta
    name="robots"
    content="noindex, nofollow" />
</svelte:head>

<h1 class="heading">
  <span>Oops!</span>
  <span>{message}</span>
</h1>

<button
  class="go-back"
  title="Go back"
  on:click={() => history.back()} />

<style lang="scss">
  .heading {
    @include colorLinearGradient(
      $color: $ColorLinearHeadingCool
    );
    @include heading;
  }
  button.go-back {
    @include imageButton(
      $image: url('/assets/icons/navigate-back.svg'),
      $cursor: (
        url('/assets/icons/paperplane.svg'),
        pointer,
      ),
      $width: 4 * $BaseSize,
      $height: 4 * $BaseSize,
    );
  }
</style>
