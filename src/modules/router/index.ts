import { ModuleSetupFn } from '../types.d';

export const setup: ModuleSetupFn = () => {
  console.log('[vue-router] ready');
};

export * from './options';
