import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

//the React function that renders updates to HTML INDEX within the container identifed as Root. Front end logic and component structure is coded within App Component.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
