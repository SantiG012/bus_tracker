const WebSocket = require('ws');

let bus_id = 4;
let a_socket = new WebSocket(`ws://localhost:8000/ws/${bus_id}/position`);

a_socket.on('error', (data) => {
    console.log(`Error: ${data}`);
});

a_socket.on('open', ()=> {
    console.log(`Connection established with bus ${bus_id}`);
});

a_socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    console.log(`Bus ${bus_id} is at ${data.latitude}, ${data.longitude}`);
}