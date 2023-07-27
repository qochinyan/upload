"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});
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
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("message", function (message) {
        console.log("Received message:", message);
        // Broadcast the message to all connected clients (excluding the sender)
        socket.broadcast.emit("message", __assign(__assign({}, message), { id: "".concat(Date.now()) }));
    });
});
server.listen(5000, function () {
    console.log("listening on *:5000");
});
