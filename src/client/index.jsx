import React from 'react';
import ReactDOM from 'react-dom';
import { makeMainRoutes } from './utils/routes.jsx';
import 'semantic-ui-css/semantic.min.css';
import '.././style/index.css';

const routes = makeMainRoutes();

ReactDOM.render(
  routes
  ,
  document.getElementById('root')
);
