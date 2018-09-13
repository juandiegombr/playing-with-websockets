const webSocketServer = require('ws').Server;

const WSS = new webSocketServer({port: 40510});
WSS.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Recieved:', message)
    ws.send(`Sending the message back to the client: ${message}`)
  })
  setTimeout(
    () => ws.send(`Scheduled message to the client: ${new Date()}`),
    1000
  )
})
