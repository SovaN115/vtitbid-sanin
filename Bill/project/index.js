import Bill from "./bill.js";
let arrBill = []; 
let from = 0;
let to = 0;
let cash = 0;
let serch = "";

for(let i = 0; i < 3; i ++) {
    from = prompt(`Введите расчетный сет платильщика ${i+1}`);
    to = prompt(`Введите расчетный счет получателя ${i+1}`);
    cash = prompt(`Введите сумму ${i+1}`);
    arrBill[i] = new Bill(from, to, cash);
}

arrBill.sort((a, b) => {
    if(a.from.toLowerCase() > b.from.toLowerCase()) {
        return 1;
    } else if (a.from.toLowerCase() < b.from.toLowerCase()) {
        return -1;
    }
    return 0;
});

console.log(arrBill);

serch = prompt("Поиск инфорации по переводуб введите счет").toLowerCase();

for(let i = 0, j = 0; i < arrBill.length; i++) {
    if(serch === arrBill[i].from) {
        console.log(`С вашго счета списано ${arrBill[i].cash}`);
        j++;
    } else if(i == arrBill.length && j > 0){
        console.log("Такого счета нет")
    }
}

