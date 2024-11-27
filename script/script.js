const dogs = 'Шарик, Бобик, Тузик, Шарик, Стрелка, Оксана, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Бим, Барбос, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс';

function dogsStr(str){
    return str.split(', ');
}

let arr = dogsStr(dogs);

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


let bigName = arr[0][0];

console.log('самая часто повторяющаяся кличка: ' + bigName);

let names = [sharik.length, bobik.length, tusik.length, strelka.length, belka.length, graf.length, tsigan.length, juk.length, rex.length, bim.length, barbos.length];

let max = Math.max(...names);

console.log(bigName + ': ' + max);

console.log('количество кличек без учета повторов: ' + names.length);

console.log('Шарик: ' + sharik.length);
console.log('Бобик: ' + bobik.length);
console.log('Тузик: ' + tusik.length);
console.log('Стрелка: ' + strelka.length);
console.log('Белка: ' + belka.length);
console.log('Граф: ' + graf.length);
console.log('Цыган: ' + tsigan.length);
console.log('Жук: ' + juk.length);
console.log('Рекс: ' + rex.length);
console.log('Бим: ' + bim.length);
console.log('Барбос: ' + barbos.length);







