let enterValue = prompt('введите значение:');
enterValue = +enterValue;
if (typeof enterValue == 'number')
    {
    if (!enterValue)
        if (enterValue == 0)
            {alert('Четное');}
        else {alert('Упс, кажется, вы ошиблись');}
    else
        {
            if (enterValue % 2 == 0)
                {alert('Четное');}
            else {alert('Нечетное');}
        }
    }
else{alert('Упс, кажется, вы ошиблись')}
