import Bill from "./bill.js";
let arrBill = [];
let from;
let to;
let cash;
for (let i = 0; i < 3; i++) {
    from = Number(Bill.checkInput(() => { return prompt(`Введите расчетный сет платильщика ${i + 1}`); }));
    to = Number(Bill.checkInput(() => { return prompt(`Введите расчетный счет получателя ${i + 1}`); }));
    cash = Number(Bill.checkInput(() => { return prompt(`Введите сумму ${i + 1}`); }));
    arrBill[i] = new Bill(from, to, cash);
}
Bill.sort(arrBill);
console.log(arrBill);
console.log(Bill.serch(arrBill));
