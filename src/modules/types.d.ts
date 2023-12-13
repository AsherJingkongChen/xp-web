import type { ViteSSGContext } from 'vite-ssg';

export type SetupModuleFunction = (
  context: ViteSSGContext<true>,
) => Promise<void> | void;
