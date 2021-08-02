/**create a clock in real time that shows the hour and every second
 * you just can use the date() the first time but not for updating the 
 * clock
 */

/*function easyClock() {
    // easy way
    setInterval(() => {
        const actualDate = new Date();
        const hours = actualDate.getHours();
        const minutes = actualDate.getMinutes();
        const seconds = actualDate.getSeconds();

        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);

}*/

class Clock {
    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }

    updating(seconds) {
        this.seconds += seconds;

        //updating seconds
        if (this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        //updating minutes
        if (this.minutes >= 60) {
            this.hours++;
            this.minutes = 0;
        }
        //updating hours
        if (this.hours >= 24) {
            this.hours = 0;
        }
    }
    display() {
        this.updating(1);
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    turnOn() {
        setInterval(() => {
            this.display();
        }, 1000);
    }

}

let myClock = new Clock();
myClock.turnOn();