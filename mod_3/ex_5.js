const getExponentiation = (x, n) => {
    let result = 1;
    for (let i=1; i <= n; i++) {
    result *= x;
    }
    return result;
};
const [x, n] = [2, 10]
const exp = getExponentiation(x, n)
console.log(`число ${x} в стпени ${n} равно: ${exp}`)