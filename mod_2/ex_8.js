let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);
function logMapElements(value, key, map) {
    console.log(`Ключ - ${key}, значение - ${value}`);
}

fruits.forEach(logMapElements)
