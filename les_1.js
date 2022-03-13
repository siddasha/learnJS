"use strict"

function sum(oper) {
    let res = oper;
    function sum_1(oper_1){
        res += oper_1;
        console.log(res);
        return sum_1;
    }
    //console.log(res);
    return sum_1;
}

sum(12)(13)(14)(100)(15); //154

//первый вариант
let sumer = {
    res: 0,
    sum(oper) {
        this.res += oper;
        return this;
    },
    show() {
        alert (this.res);
        return this;
    },
};

sumer.sum(111).sum(220).sum(20).show(); //351