const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.intervalId = null; 
    }

    start() {
        console.log('Таймер почав роботу.');
        this.intervalId = setInterval(() => {
            this.emit('tick', new Date()); 
        }, 1000); 
    }

    stop() {
        console.log('Таймер зупинено.');
        clearInterval(this.intervalId); 
    }
}

const timer = new Timer();

timer.on('tick', (currentTime) => {
    console.log(`Поточний час: ${currentTime.toLocaleTimeString()}`);
});

timer.start();

setTimeout(() => {
    timer.stop();
}, 10000); 
