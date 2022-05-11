const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg) {
    return arr.map(function(item){
      return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maça', mapComThis(nums, maca));

//function sem this

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums))

//filter

function filterNums(arr){ 
    return arr.filter(callback)
}

function callback(item) {
return item % 2 === 0;
}

const nums = [5, 7, 3, 2, 8, 16, 12, 52, 1094, 3849]

console.log(filterNums(nums))

//reduce

function somaNumeros(arr) {
    return arr.reduce(function(prev, current){
        return prev + current;
    }) 
}

const arr = [1, 2]

console.log(somaNumeros(arr))

//reduce com preços

function somaSaldo(arr) {
    return precos.reduce(function(prev, current){
        return prev - current;
    }, saldoInicial)
}

const saldoInicial = [700]
const precos = [10, 50, 17, 9, 15, 3, 7]

console.log(somaSaldo(precos))