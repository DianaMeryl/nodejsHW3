const EventEmitter = require('events');

class Logger extends EventEmitter {
    constructor() {
        super();
    }

    log(message) {
        this.emit('log', message);
    }
}

const logger = new Logger();

logger.on('log', (message) => {
    console.log(`Лог: ${message}`);
});

logger.log('Homework Nodejs Lesson - 3 task - 5');

