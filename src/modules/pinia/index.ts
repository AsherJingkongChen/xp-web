import { ModuleSetupFn } from '@/modules';
// import { createPinia } from 'pinia';

export const setup: ModuleSetupFn = (/* { app, isClient, initialState } */) => {
  // const pinia = createPinia();
  // app.use(pinia);
  // if (isClient) {
  //   pinia.state.value = initialState.pinia || {};
  // } else {
  //   initialState.pinia = pinia.state.value;
  // }
  console.log('[pinia] sleep');
};
