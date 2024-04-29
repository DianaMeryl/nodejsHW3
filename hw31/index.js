const EventEmitter = require('events');

class TrafficLight extends EventEmitter {
    constructor() {
        super();
        this.currentState = 'red'; 
    }

    start() {
        setInterval(() => {
            switch (this.currentState) {
                case 'red':
                    this.changeState('green');
                    break;
                case 'green':
                    this.changeState('yellow');
                    break;
                case 'yellow':
                    this.changeState('red');
                    break;
                default:
                    break;
            }
        }, 5000); 

        console.log('Traffic light simulation started...');
    }

    changeState(newState) {
        this.currentState = newState;
        switch (newState) {
            case 'green':
                this.emit('green', 'Green light is on'); 
                break;
            case 'yellow':
                this.emit('yellow', 'Yellow light is on'); 
                break;
            case 'red':
                this.emit('red', 'Red light is on'); 
                break;
            default:
                break;
        }
    }
}

const trafficLight = new TrafficLight();

trafficLight.on('green', (message) => {
    console.log(message);
});

trafficLight.on('yellow', (message) => {
    console.log(message);
});

trafficLight.on('red', (message) => {
    console.log(message); 
});

trafficLight.start();
