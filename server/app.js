const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const task = require('node-schedule');
const { Counter } = require('./static');

const port = 6974;

const run = () => {
    task.scheduleJob("*/5 * * * * *", () => {
        console.log(`Currently user count : ${Counter.getCount()}`);
    });
};

http.listen(port, () => {
    console.log(`Listening on ${port}`);
    run();
});

io.on('connection', (socket) => {
    console.log(`Connected`);
    Counter.addUser();

    socket.on('disconnect', () => {
        console.log(`Disconnected`);
        Counter.removeUser();
    });
});

