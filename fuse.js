const { FuseBox, WebIndexPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src/client/',
  output: 'dist/public/$name',
  tsConfig: 'tsconfig.json',
  target: 'browser',
  alias: {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
    'redux-saga/effects': 'redux-saga/lib/effects',
  },
  plugins: [
    WebIndexPlugin({
      template: 'src/client/index.html',
      title: 'Readit',
      target: 'index.html',
    }),
  ],
});

fuse.dev({
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
});

fuse
  .bundle('app')
  .instructions('>index.tsx')
  .hmr()
  .watch();

fuse.run();
