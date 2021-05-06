var arr1, arr2;
var feature;
function checkUniqueValue(feature, array)
    {
        for (let i=0; i<array.length-1; i+=1)
            {
                if (array[i] == array[i+1]){feature=true;}
                else {feature=false; break;}
            }
        return feature
    }
arr1 = [1, 1, 1, 1, 1];
arr2 = [0, 1, 2, 3, 4];
feature = true;
feature = checkUniqueValue(feature, arr1)
console.log(feature)
feature = true;
feature = checkUniqueValue(feature, arr2)
console.log(feature)