import express from 'express';
//Using vite for jsx translation
import ViteExpress from 'vite-express'

const app = express()
const hostPort = 3000

ViteExpress.listen(app, hostPort, () =>{
  console.log(`Server Listening at http://localhost:${hostPort}`)
})
