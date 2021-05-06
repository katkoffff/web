var arr, numEven, numOdd, numZero, numOther;
arr = [0, 1, 2, 3, 4, null, NaN, '+', 'str', 0, 53, 101, 4, 5];
numEven = 0;
numOdd = 0;
numZero = 0;
numOther = 0;
for (let i=0; i<arr.length; i+=1) {
    if (typeof arr[i] == 'number') {
        if (!isNaN(arr[i])) {
            if (arr[i] == 0) {numZero += 1;}
            else if (arr[i] % 2 == 0) {numEven += 1;}
            else {numOdd += 1;}
        }
        else {numOther += 1;}
    }
    else {numOther+=1;}
}
console.log('нулевых значений:' + numZero)
console.log('четных значений:' + numEven)
console.log('нечетных значений:' + numOdd)
console.log('других значений:' + numOther)