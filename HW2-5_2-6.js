let a = 1;
let b = 2;
//задания 5 и 6
console.log(mathOperation(a, b,'amo'));
console.log(mathOperation(a, b,'dif'));
console.log(mathOperation(a, b,'mul'));
console.log(mathOperation(a, b,'sha'));

function amo(a,b){
    return a + b;
}

function dif(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function sha(a, b){
    return a / b;
}

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'amo': {
            return amo(arg1, arg2);
        }
        case 'dif': {
            return dif(arg1, arg2);
        }
        case 'mul': {
            return mul(arg1, arg2);
        }
        case 'sha': {
            return sha(arg1, arg2);
        }
        break;
    }
}