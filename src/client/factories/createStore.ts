let createStore: any;

if (process.env.NODE_ENV === 'production') {
  createStore = require('./createStore.production').default;
} else {
  createStore = require('./createStore.development').default;
}

export default createStore;
