// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { createRoot } from 'react-dom';

import App from './components/App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
