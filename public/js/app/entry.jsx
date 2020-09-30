/* eslint import/first: 0 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render(<App />, document.getElementById('app'));
