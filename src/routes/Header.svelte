<script>
  import { base } from '$app/paths';
</script>

<header>
  <a
    class="home"
    href="{base}/"
    title="Go to Home page">
    <img
      class="icon"
      alt="Go Home"
      src="assets/logo/brand.svg"
      on:contextmenu|preventDefault|stopPropagation />
  </a>
</header>

<style lang="scss">
  header {
    position: relative;
    .home {
      cursor: url('/assets/icons/paperplane.svg'), pointer;
      position: relative;
      padding: 1.25 * $BaseSize 1 * $BaseSize;
      .icon {
        position: relative;
        width: 4 * $BaseSize;
        height: 2 * $BaseSize;
        min-width: max-content;
        color: $ColorTextCool;
        font-size: 0.75 * $BaseSize;
      }
    }
  }
</style>
