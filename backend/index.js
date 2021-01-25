const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

http.listen(3000, () => {
    console.log('listening on *:3000');
});

app.get('/', (req, res) => {
    res.send('Merhaba Socket IO');
})

io.on('connection', (socket) => {
    socket.on('color', (bgColor, changerName) => {
        socket.broadcast.emit('changed-bg-color', {
            background: bgColor,
            changerName: changerName
        })
    });
});