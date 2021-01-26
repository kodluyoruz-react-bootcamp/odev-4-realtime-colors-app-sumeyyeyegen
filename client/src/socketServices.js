import { io } from 'socket.io-client';

let socket;

export const initSocket = () => {
    socket = io('https://shielded-spire-36854.herokuapp.com/', {
        transports: ['websocket']
    });
};

export const disconnectSocket = () => {
    console.log("Disconnecting...");
    if (socket) socket.disconnect();
};

export const setBgColor = (bgColor, changerName) => {
    if (socket) {
        socket.emit('color', bgColor, changerName);
        console.log(bgColor)
    }
}

export const subscribeToBgColor = (callback) => {
    socket.on("changed-bg-color", (color) => {
        console.log('deneme')
        callback(color)
    });
};










