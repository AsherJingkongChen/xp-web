<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { page } from '$app/stores';
  import { capitalizeEach } from '$lib/utils';

  const DefaultMessage = 'Has An Error';
  let message = DefaultMessage;
  $: {
    message = capitalizeEach(
      $page.error?.message ?? DefaultMessage,
    );
  }
</script>

<Head
  title={`Page ${message} - ` +
    'Your file previewer has a problem'}
  description={'' +
    "Oops! The page you're searching for " +
    `encounters an error (${message}). ` +
    'Please navigate back to the last page or ' +
    "explore our file previewer's " +
    'intriguing corners.'} />

<svelte:head>
  <meta
    name="robots"
    content="noindex, nofollow" />
</svelte:head>

<h1 class="heading">
  <span>Oops!</span>
  <span>Page {message}</span>
</h1>

<button
  class="go-back"
  title="Go back"
  on:click={() => history.back()}>
  <div class="icon" />
</button>

<style lang="scss">
  .heading {
    @include colorLinearGradient(
      $color: $ColorLinearHeadingCool
    );
    @include heading;
  }
  button.go-back {
    @include mainButton(
      $image: url('/icons/navigate-back.svg'),
      $cursor: (
        url('/icons/paperplane.svg'),
        pointer,
      )
    );
  }
</style>
