import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SamuraiJSApp from "./App";





ReactDOM.render(<SamuraiJSApp/>, document.getElementById('root'));




serviceWorker.unregister();
