const dogs = 'Шарик, Бобик, Тузик, Шарик, Стрелка, Оксана, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Бим, Барбос, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс';

function dogsStr(str){
    return str.split(', ');
}

let arr = dogsStr(dogs);

let obj = {};

arr.forEach((value) => {
    if (!obj[value]) {
        obj[value] = 1; 
    } else {
        obj[value] = obj[value] + 1;
    }
})

console.log(obj);

arr.sort((i, j) => {
    if (i.length < j.length) return 1;
    if (i.length == j.length) return 0;
    if (i.length > j.length) return -1;
})


for (var key in arr){
    
}







