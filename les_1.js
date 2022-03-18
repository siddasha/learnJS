"use strict"

//задача преобразовать функцию вида f(a, b, c) в f(a)(b)(c) и посчитать сумму аргументов
const sum = ( a, b, c ) => a + b + c; 

/* 
function curry (fn){
    const n = fn.length;
    function divideFn(n, args){
        return function actualDivideFn(a){
            if(n <= 1) {
                return fn (...args, a); 
            }
            return divideFn (n-1, [...args, a]);
        }
    }
    return divideFn(n, []);
}

const _sum = curry (sum);
console.log(_sum(1)(55)(44));
*/

// 
const curry = fn => {
    const n = fn.length;
    const divideFn = (n, args) => {
        return function actualDivideFn(a) {
            if(n <= 1) {
                return fn (...args, a); 
            }
            return divideFn (n-1, [...args, a]);
        }
    }
    return divideFn(n, []);
}

const _sum = curry (sum);
console.log(_sum(1)(55)(444));

//sumInf считает сумм, но выводит результат только в alert,
//а как передать результат иначе я не придумала еще (((
function sumInf (n) {
    let result = n;
    function devideFnSumInf(oper_1){
        result += oper_1;
        return devideFnSumInf;
    }
    // если был бы alert
    devideFnSumInf.toString = function() {
        return result;
    };
    return devideFnSumInf; 
}

console.log (sumInf(12)(13)(14)(100)(15)); 


