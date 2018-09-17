import express from 'express'
import React from 'react'
import { renderToString, renderToNodeStream } from 'react-dom/server'
import { renderStylesToNodeStream } from 'emotion-server'

import App from './App'
import { StaticRouter } from 'react-router-dom'

const app = express()

app.use(express.static('public'))

app.get('*', (req, response) => {
  // Send the start of your HTML to the browser
  response.write('<html><head><title>Page</title></head><body><div id="root">')

  const stream = renderToNodeStream(
    <StaticRouter location={req.url} context={{ data: 'menor' }}>
      <App />
    </StaticRouter>
  ).pipe(renderStylesToNodeStream())
  stream.pipe(
    response,
    { end: 'false' }
  )

  stream.on('end', () => {
    response.end('</div></body></html>')
  })

  // UNCOMENT TO DISABLE STREAM
  // const toRender = renderStylesToString(
  //   renderToNodeStream(
  //     <StaticRouter location={req.url} context={{ data: 'menor' }}>
  //       <App />
  //     </StaticRouter>
  //   )
  // )
  // res.send(`
  //     <!DOCTYPE html>
  //     <html lang="en">
  //       <head>
  //           <meta charset="UTF-8">
  //           <title>Title</title>
  //       </head>
  //       <body>
  //           <div id="root">${toRender}</div>
  //       </body>
  //       </html>`)
})

app.listen('3000', () => {
  console.log('Tamo vivão vamo viver')
})
