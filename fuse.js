const {
  CSSPlugin,
  EnvPlugin,
  FuseBox,
  QuantumPlugin,
  WebIndexPlugin,
} = require('fuse-box');

const isProduction = process.env.NODE_ENV === 'production';

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
    CSSPlugin(),
    EnvPlugin({
      NODE_ENV: isProduction ? 'production' : 'development',
    }),
    WebIndexPlugin({
      template: 'src/client/index.html',
      title: 'Readit',
      target: 'index.html',
    }),
    isProduction &&
      QuantumPlugin({
        uglify: true,
        treeshake: true,
      }),
  ],
});

if (!isProduction) {
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
}

const app = fuse.bundle('app').instructions('> index.tsx');

if (!isProduction) {
  app.hmr().watch();
}

fuse.run();
