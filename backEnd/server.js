const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
