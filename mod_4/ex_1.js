let FirstObject = {
    a : 1,
    b : true,
    c : 'str'
}

let SecondObject = Object.create(FirstObject);
SecondObject.d = false

function showOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`ключ - ${key}, значение - ${obj[key]}`);
        }
    }
}

showOwnProperties(FirstObject)
showOwnProperties(SecondObject)
