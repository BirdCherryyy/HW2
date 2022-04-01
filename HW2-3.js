var a = getRandomInt(-10, 10);
var b = getRandomInt(-10, 10);

calc(a,b);

function calc(a,b){// условия расчета, согласно дз
    if (a >= 0 && b >= 0){
        console.log('a = ' + a, 'b = ' + b, 'a - b = ' + (a - b))
    }
    else if (a < 0 && b <0){
        console.log('a = ' + a, 'b = ' + b, 'a * b = ' + (a * b))
    }
    else{
        console.log('a = ' + a, 'b = ' + b, 'a + b = ' + (a + b))
    }
}

function getRandomInt(min, max) {//рандомные числа в диапозоне
    return Math.floor(Math.random() * (max - min)) + min;
  }