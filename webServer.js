import express from 'express';
import ViteExpress from 'vite-express'
const app = express()
const hostPort = 3000

app.get('/api/status', (req, res) => {
  console.log("API hit!");
  res.send("Triple-Ts API is online.");
});

ViteExpress.listen(app, hostPort, () =>{
  console.log(`Server Listening at http://localhost:${hostPort}`)
})
