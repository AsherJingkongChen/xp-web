import { ModuleSetupFn } from '@/modules';

export const setup: ModuleSetupFn = () => {
  console.log('[vue-router] ready');
};

export * from './options';
