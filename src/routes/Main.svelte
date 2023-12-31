<main>
  <article class="main">
    <slot />
  </article>
</main>

<style lang="scss">
  main {
    $ScrollBarWidth: 0.5 * $BaseSize;
    $ScrollBarBorder: 0.1 * $ScrollBarWidth;
    grid-area: 2 / 1 / 3 / 3;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: $BaseSize;
    display: grid;
    place-items: center;
    overflow: auto;
    scrollbar-width: $ScrollBarWidth;
    scrollbar-color: $ColorOutline $ColorBorder;
    scrollbar-gutter: stable;
    article.main {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &::-webkit-scrollbar {
      width: $ScrollBarWidth;
    }
    &::-webkit-scrollbar-track {
      background-color: $ColorBorder;
      border-radius: 0.5 * $ScrollBarWidth;
    }
    &::-webkit-scrollbar-thumb {
      background: $ColorOutline;
      border-radius: 0.5 * $ScrollBarWidth;
      border: $ScrollBarBorder solid $ColorBorder;
      box-shadow: inset 0 0 2 * $ScrollBarBorder
        $ColorShadow;
      background-clip: content-box;
      -webkit-background-clip: content-box;
    }
  }
</style>
