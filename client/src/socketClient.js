import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

function newConnection(merchantId, callback) {
  socket.on('updateConnectionStatus', data => callback(data));
  socket.emit('newConnection', merchantId);
}

export { newConnection };
