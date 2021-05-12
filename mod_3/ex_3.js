function externalFunc(a){
    return function internalFunc(b){
        console.log(a+b)
    }
}
const resultFunc = externalFunc(5);

resultFunc(4);