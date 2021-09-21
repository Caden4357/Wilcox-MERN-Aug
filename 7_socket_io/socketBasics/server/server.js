const express = require("express");
const cors = require('cors');
const socketio = require('socket.io');
const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:3000"
}))


// require("./config/mongoose.config");

// require("./routes/teamManager.routes")(app);

const server = app.listen(port, () => 
console.log("You have successfully connected to port 8000"));

const io = socketio(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", (socket) => {
    console.log("Server side from socket id: " + socket.id); 

})

