import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/App';
import FuelSavingsPage from './app/fuelSaver/FuelSavingsPageContainer';
import AboutPage from './app/staticPages/AboutPage';
import NotFoundPage from './app/staticPages/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FuelSavingsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
