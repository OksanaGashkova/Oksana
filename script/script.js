const dogs = 'Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс, Бим, Барбос, Шарик, Бобик, Тузик, Шарик, Стрелка, Белка, Бобик, Граф, Цыган, Шарик, Жук, Рекс';
const result = dogs.split(', ');

let sharik = [];
let bobik = [];
let tusik = [];
let strelka = [];
let belka = [];
let graf = [];
let tsigan = [];
let juk = [];
let rex = [];
let bim = [];
let barbos = [];

let arr = [sharik, bobik, tusik, strelka, belka, graf, tsigan, juk, rex, bim, barbos];

for (let i = 0; i < result.length; i++) {
    
    if (result[i] == 'Шарик') {
       sharik.push('Шарик'); 
    }

    if (result[i] == 'Бобик') {
        bobik.push('Бобик'); 
    }

     if (result[i] == 'Тузик') {
        tusik.push('Тузик'); 
    }
       
    if (result[i] == 'Стрелка') {
        strelka.push('Стрелка'); 
    }

    if (result[i] == 'Белка') {
        belka.push('Белка'); 
    }

    if (result[i] == 'Граф') {
        graf.push('Граф'); 
    }

    if (result[i] == 'Цыган') {
        tsigan.push('Цыган'); 
    }
    
    if (result[i] == 'Жук') {
        juk.push('Жук'); 
    }

    if (result[i] == 'Рекс') {
        rex.push('Рекс'); 
    }

    if (result[i] == 'Бим') {
        bim.push('Бим'); 
    }

    if (result[i] == 'Барбос') {
        barbos.push('Барбос'); 
    }
}

function compareNumeric(i, j) {
    if (i.length < j.length) return 1;
    if (i.length == j.length) return 0;
    if (i.length > j.length) return -1;
}

arr.sort(compareNumeric);

let BigName = arr[0];

console.log('самая часто повторяющаяся кличка: ' + BigName[0]);

let names = [sharik.length, bobik.length, tusik.length, strelka.length, belka.length, graf.length, tsigan.length, juk.length, rex.length, bim.length, barbos.length];

let max = Math.max(...names);
console.log(BigName[0] + ':' + ' ' + max);

console.log('количество кличек без учета повторов' + ':' + ' ' + names.length);

console.log('Шарик' + ':' + ' ' + sharik.length);
console.log('Бобик' + ':' + ' ' + bobik.length);
console.log('Тузик' + ':' + ' ' + tusik.length);
console.log('Стрелка' + ':' + ' ' + strelka.length);
console.log('Белка' + ':' + ' ' + belka.length);
console.log('Граф' + ':' + ' ' + graf.length);
console.log('Цыган' + ':' + ' ' + tsigan.length);
console.log('Жук' + ':' + ' ' + juk.length);
console.log('Рекс' + ':' + ' ' + rex.length);
console.log('Бим' + ':' + ' ' + bim.length);
console.log('Барбос' + ':' + ' ' + barbos.length);







