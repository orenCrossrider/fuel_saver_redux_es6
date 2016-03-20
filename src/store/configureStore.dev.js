//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore } from 'redux';
import rootReducer from '../app/rootReducer';

export default function configureStore(initialState) {
  let store;
  if (window.devToolsExtension) { //Enable Redux devtools if the extension is installed in developer's browser
    store = window.devToolsExtension()(createStore)(rootReducer, initialState);
  } else {
    store = createStore(rootReducer, initialState);
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../app/rootReducer', () => {
      const nextReducer = require('../app/rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
