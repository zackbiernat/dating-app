import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App.jsx';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
