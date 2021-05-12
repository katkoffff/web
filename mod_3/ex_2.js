let enterValue = prompt('введите значение:');
enterValue =  + enterValue;
if (typeof enterValue == 'number'){
    if (enterValue <= 1000){
        if (enterValue < 2){
            alert(`число - ${enterValue} не является простым!`)
        } else {
            let divCount = 0;
            for (let i = 1; i <= Math.trunc(enterValue / 2); i++){
                if (enterValue % i == 0) {
                    divCount++
                }
            }
            if (divCount > 1){
                alert(`число - ${enterValue} не является простым!`)
            } else {
                alert(`число - ${enterValue} является простым!`)
            }
        }
    } else {
        alert('вы ошиблись с вводом числа!')
    }
} else {
    alert('вы ввели не число!')
}