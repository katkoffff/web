function externalFunc(a, b) {
    const intervalId = setInterval(function () {
        if (a <= b) {
            console.log(a++);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
    return intervalId
}
const resultFunc = externalFunc(5, 15);
resultFunc;



