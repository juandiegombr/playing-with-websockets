let ws = new WebSocket('ws://localhost:40510');
 ws.onopen = function () {
     console.log("WS Connected");
     ws.send('Connected')
 };

 ws.onmessage = function (e) {
    console.log(e)
    alert(e.data)
    
 };

 const button = document.getElementById('send-message')
 const message = document.getElementById('message')

button.addEventListener('click', () => {
    ws.send(message.value)
})