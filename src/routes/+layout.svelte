<script lang="ts">
  import '$lib/styles/font.scss';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import { PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN } from '$env/static/public';
  import { useRegisterSW } from 'virtual:pwa-register/svelte';
  import Header from './Header.svelte';
  import Main from './Main.svelte';
  import Nav from './Nav.svelte';

  if (browser) {
    useRegisterSW({ immediate: true });
  }
</script>

<svelte:head>
  <base href="{base}/" />
  <meta
    name="google-site-verification"
    content={PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN} />
</svelte:head>

<Header />
<Nav />
<Main><slot /></Main>

<style lang="scss">
  :global {
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      border: unset;
      margin: unset;
      outline: unset;
      padding: unset;
    }
    b,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 700;
    }
    button,
    input,
    select,
    textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      overflow-wrap: anywhere;
      text-overflow: ellipsis;
      word-break: normal;
    }
    a,
    button {
      cursor: unset;
      display: grid;
      place-items: center;
      background: unset;
      color: unset;
      line-height: unset;
      text-align: center;
      text-decoration: unset;
      transition: filter 0.25s linear;
      &:hover {
        filter: $FilterBright;
      }
    }
    body {
      position: relative;
      padding-inline: 1.5 * $BaseSize;

      // On portrait: No padding-bottom
      padding-bottom: 1.5 * $BaseSize;
      @include mediaQueryPortrait {
        padding-bottom: 0;
      }
      height: 100vh;
      height: 100svh;
      width: 100vw;
      width: 100svw;
      display: grid;
      grid-template: min-content auto min-content / min-content auto;
      grid-auto-flow: column;
      align-items: center;
      background-color: $ColorJapaneseVioletShade;
      background-image: $ColorLinearBackground;
      background-repeat: no-repeat;
      color: $ColorTextWarm;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      line-height: $LineHeight;
      font-family: 'Noto Sans', sans-serif;
      font-size: 16px;
      font-family: 'Noto Sans', sans-serif;
      font-size: calc(8px + 0.8vmax + 0.08vmin);
      -webkit-text-size-adjust: 100%;
    }

    $H1FontSize: 3 * $BaseSize;
    $H2FontSize: 0.825 * $H1FontSize;
    $H3FontSize: 0.825 * $H2FontSize;
    $H4FontSize: 0.825 * $H3FontSize;
    $H5FontSize: 0.825 * $H4FontSize;
    $H6FontSize: 0.825 * $H5FontSize;
    h1 {
      font-size: $H1FontSize;
    }
    h2 {
      font-size: $H2FontSize;
    }
    h3 {
      font-size: $H3FontSize;
    }
    h4 {
      font-size: $H4FontSize;
    }
    h5 {
      font-size: $H5FontSize;
    }
    h6 {
      font-size: $H6FontSize;
    }
    ::selection {
      background-color: color.change(
        $ColorTextWarm,
        $alpha: 0.25
      );
      color: $ColorOutline;
    }
  }
</style>
