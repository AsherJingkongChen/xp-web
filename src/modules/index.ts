import { Module, ModuleSetupFn } from './types.d';

export const setupAllModules: ModuleSetupFn = (context) => {
  const moduleMap = import.meta.glob<Module>('./*/index.ts', { eager: true });
  for (const module of Object.values(moduleMap)) {
    module.setup(context);
  }
};

export * from './router';
export * from './types.d';
