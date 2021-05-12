var arr;
arr = [0, 1, 2, 3, 4, null, NaN, '+', 'str', 0, 53, 101, 4, 5];
function countDifferentType(arr){
    let [numEven, numOdd, numNull, numOther] = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            numNull += 1;
        } else if (typeof arr[i] == 'number') {
            if (!isNaN(arr[i])) {
                if (arr[i] % 2 == 0) {
                    numEven += 1;
                } else {
                    numOdd += 1;
                }
            } else {
                numOther += 1;
            }
        } else {
            numOther += 1;
        }
    }
    console.log('нулевых значений:' + numNull);
    console.log('четных значений:' + numEven);
    console.log('нечетных значений:' + numOdd);
    console.log('других значений:' + numOther);
}
countDifferentType(arr)

