const checkProperty = function(str, obj) {
    if (str in obj) {
        return true
    } else {
        return false
    }
};

let CheckObject = {
    a:100,
    ch:'in',
    tf:true
};

toconsole = checkProperty('z', CheckObject);

console.log(toconsole);