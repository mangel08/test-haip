import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv'

// Semantic CSS
import 'semantic-ui-css/semantic.min.css'

/* Config */
dotenv.config()

ReactDOM.render(<App />, document.getElementById('root'));

