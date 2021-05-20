var powerCount=[]

function Device(name, category, power){
    this.name=name,
    this.category=category,
    this.power=power
}

Device.prototype.turnOn = function(action) {
    this.action=action
}

function ComputerDevice(computerType) {
    this.computerType=computerType
}

ComputerDevice.prototype = new Device('computer', 'home device', 500)

ComputerDevice.prototype.getGame = function(toRun) {
    this.toRun=toRun
}

let myBook = new ComputerDevice('notebook')
myBook.turnOn(true)
myBook.getGame(true)

powerCount.push([myBook.action, myBook.power])

function AudioDevice(audioType) {
    this.audioType=audioType
}

AudioDevice.prototype = new Device('headphones', 'audio device', 10)

AudioDevice.prototype.setVolume = function (vol) {
    this.vol=vol
}

let myHeadphones = new AudioDevice('headphone')
myHeadphones.turnOn(true)
myHeadphones.setVolume(10)

powerCount.push([myHeadphones.action, myHeadphones.power])

let sumPower = 0
powerCount.forEach(function(item, index, array) {
    if (item[0]) {
        sumPower += item[1];
    }
});
console.log(sumPower)