import express from "express";
import http from "http";
import { Server } from "socket.io";
import { ClientToServer, ServersToClient } from "./sockets/typing";
const app = express();
const server = http.createServer(app);
const io = new Server<ClientToServer, ServersToClient>(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});
import { join } from "path";

// app.use(
//   "/*",
//   (req, res, next) => {
//     res.set("Access-Control-Allow-Origin", "*");
//     next();
//   },
//   express.static(join(__dirname, "../../client", "dist"), {
//     extensions: ["js, html", "css"],
//   })
// );

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log("Received message:", message);

    // Broadcast the message to all connected clients (excluding the sender)
    socket.broadcast.emit("message", { ...message, id: `${Date.now()}` });
  });
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
