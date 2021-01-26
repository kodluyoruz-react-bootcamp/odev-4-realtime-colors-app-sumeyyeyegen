const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

http.listen(process.env.PORT || 4000, () => {
    console.log('listening on *:4000');
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