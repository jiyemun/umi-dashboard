import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/umi-dashboard/',
  publicPath: '/umi-dashboard/',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'TACHYON',
  },
  locale: {
    antd: true,
    baseNavigator: false,
    baseSeparator: '-',
    default: 'en-US',
    title: false,
    useLocalStorage: false,
  },
  favicons: ['/favicon.ico'],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Projects',
      path: '/projects',
      component: './Projects',
    },
    {
      name: 'Profile',
      path: '/profile',
      component: './Profile',
    },
  ],

  npmClient: 'npm',
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
  },
  define: {
    'process.env': process.env, // ✅ 환경 변수 사용 가능하게 설정
  },
  tailwindcss: {},
});
