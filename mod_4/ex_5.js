var powerCount=[];

class Device {
    constructor(name, category, power) {
        this.name=name,
        this.category=category,
        this.power=power
    }
    turnOn(action) {
        this.action=action
    }
};

class ComputerDevice extends Device {
    constructor(computerType, name, category, power) {
        super(name, category, power);
        super.turnOn();
        this.computerType=computerType;
    }
    getGame(toRun) {
        this.toRun=toRun;
    }
};

const myBook = new ComputerDevice('notebook', 'computer', 'home device', 500);

myBook.turnOn(true);
myBook.getGame(true);
powerCount.push([myBook.action, myBook.power]);

class AudioDevice extends Device {
    constructor(audioType, name, category, power) {
        super(name, category, power);
        super.turnOn();
        this.audioType=audioType;
    }
    setVolume(vol) {
        this.vol=vol;
    }
};

const myHeadphones = new AudioDevice('headphone','headphones', 'audio device', 10);
myHeadphones.turnOn(true);
myHeadphones.setVolume(10);

powerCount.push([myHeadphones.action, myHeadphones.power]);

let sumPower = 0;
powerCount.forEach(function(item, index, array) {
    if (item[0]) {
        sumPower += item[1];
    }
});
console.log(sumPower);