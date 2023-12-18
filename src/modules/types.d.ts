import { ViteSSGContext } from 'vite-ssg';

export type Module = {
  setup: ModuleSetupFn;
};

export type ModuleSetupFn = (
  context: ViteSSGContext<true>,
) => Promise<void> | void;
