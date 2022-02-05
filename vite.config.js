import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  //Pug loaderを追加(https://bit.ly/3goMRhx)
  chainWebpack: (config) => {
    //Pug Loader
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
  plugins: [vue()],
});
