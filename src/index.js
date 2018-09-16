import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router-dom'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  // console.log(req)
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            <div id="root">${renderToString(
              <StaticRouter location={req.url} context={{data: 'menor'}}>
                <App />
              </StaticRouter>
            )}</div>
        </body>
        </html>`)
})

app.listen('3000', () => {
  console.log('Tamo vivão vamo viver')
})
