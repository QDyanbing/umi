import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    { path: '/', redirect: '/hello' },
    { path: '/hello', component: './Hello' },
  ],
  qiankun: {
    slave: {},
  },
  npmClient: 'yarn',
});
