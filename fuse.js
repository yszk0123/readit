const { FuseBox, WebIndexPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src/client/',
  output: 'dist/public/$name',
  tsConfig: 'tsconfig.json',
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
});

fuse
  .bundle('app')
  .instructions('>index.tsx')
  .hmr()
  .watch();

fuse.run();
