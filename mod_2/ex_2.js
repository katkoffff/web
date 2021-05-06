var X;
X = NaN
switch (typeof X) {
    case 'number':
        console.log(X + '- число');
        break;
    case 'string':
        console.log(X + '- строка');
        break;
    case 'boolean':
        console.log(X + ' - логическое');
        break;
    default:
        console.log('Тип ' + X + ' не определён');
}

