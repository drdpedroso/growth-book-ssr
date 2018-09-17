import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const app = document.getElementById('app')
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app
)
