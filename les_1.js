"use strict"

//задача преобразовать функцию вида f(a, b, c) в f(a)(b)(c) и посчитать сумму аргументов


const sum = (a, b, c) => a+b+c;

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
console.log(_sum(1)(55)(49));



