const dogs = 'Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Бим, Барбос, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс';
const result = dogs.split(', ');

const sharik = [];
const bobik = [];
const tusik = [];
const strelka = [];
const belka = [];
const graf = [];
const tsigan = [];
const juk = [];
const rex = [];
const bim = [];
const barbos = [];

const arr = [sharik, bobik, tusik, strelka, belka, graf, tsigan, juk, rex, bim, barbos];

result.forEach(function(item) {

    switch (item, i, arr) {

       case 'Шарик':
        sharik.push('Шарик'); 
        break;
        
       case 'Бобик':
        bobik.push('Бобик');
        break;

       case 'Тузик':
        tusik.push('Тузик');
        break;

       case'Стрелка':
        strelka.push('Стрелка'); 
        break;

       case 'Белка':
        belka.push('Белка');
        break;

       case 'Граф':
        graf.push('Граф'); 
        break;

       case 'Цыган':
        tsigan.push('Цыган'); 
        break;

       case 'Жук':
        juk.push('Жук');
        break;

       case 'Рекс':
        rex.push('Рекс'); 
        break;

       case 'Бим':
        bim.push('Бим'); 
        break;

       case 'Барбос':
        barbos.push('Барбос');
        break;
    }

})

arr.sort((i, j) => {
    if (i.length < j.length) return 1;
    if (i.length == j.length) return 0;
    if (i.length > j.length) return -1;
})


let BigName = arr[0];

console.log('самая часто повторяющаяся кличка: ' + BigName[0]);

let names = [sharik.length, bobik.length, tusik.length, strelka.length, belka.length, graf.length, tsigan.length, juk.length, rex.length, bim.length, barbos.length];

let max = Math.max(...names);
console.log(BigName[0] + ': ' + max);

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







