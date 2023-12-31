<script>
  import { base } from '$app/paths';
</script>

<header>
  <a
    class="home"
    href="{base}/"
    title="Go to Home page">
  </a>
</header>

<style lang="scss">
  header {
    position: relative;
    .home {
      @include imageButton(
        $image: url('/assets/icons/brand.svg'),
        $cursor: (
          url('/assets/icons/paperplane.svg'), pointer
        ),
        $width: 4 * $BaseSize,
        $height: 2 * $BaseSize,
      );
      padding-block: 1.25 * $BaseSize;
    }
  }
</style>
