function creatEmptyObject() {
    return Object.create(null);
}
const empty_object = creatEmptyObject()
console.log(typeof(empty_object))
console.log(empty_object.__proto__)