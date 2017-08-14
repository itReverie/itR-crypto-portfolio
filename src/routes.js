import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="portfolio" component={PortfolioPage}/>
  </Route>
);