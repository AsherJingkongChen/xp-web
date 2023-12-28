<nav>
  <a
    class="nav-option go-to-guide"
    href="guide/"
    title="Go to Guide page">
    Guide
  </a>
  <a
    class="nav-option go-to-info"
    href="info/"
    title="Go to Info page">
    Info
  </a>
</nav>

<style lang="scss">
  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: right;

    // On orientation changed: Change layout and width
    grid-area: 1 / 2 / 2 / 3;
    width: min-content;
    justify-content: right;
    @include mediaQueryPortrait {
      grid-area: 3 / 1 / 4 / 3;
      width: 100%;
      justify-content: space-between;
    }
    .nav-option {
      position: relative;
      padding: 1.25 * $BaseSize 1 * $BaseSize;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5 * $BaseSize;
      font-weight: 600;

      // On orientation changed: Change color
      color: $ColorTextCool;
      @media screen and (orientation: portrait) {
        color: $ColorTextWarm;
      }

      &::before {
        content: '';
        position: relative;
        width: #{$LineHeight}em;
        height: #{$LineHeight}em;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &.go-to-guide {
        cursor: url('/assets/icons/document.svg'), context-menu;
        &::before {
          // On orientation changed: Change color
          background-image: url('/assets/icons/guide-cool.svg');
          @media screen and (orientation: portrait) {
            background-image: url('/assets/icons/guide-warm.svg');
          }
        }
      }
      &.go-to-info {
        cursor: url('/assets/icons/radar.svg'), help;
        &::before {
          // On orientation changed: Change color
          background-image: url('/assets/icons/info-cool.svg');
          @media screen and (orientation: portrait) {
            background-image: url('/assets/icons/info-warm.svg');
          }
        }
      }
    }
  }
</style>
