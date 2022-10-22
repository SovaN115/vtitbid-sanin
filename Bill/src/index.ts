import Bill from "./bill.js";
import Validator from "./validator.js";
let arrBill: Bill[] = []; 
let from: string;
let to: string;
let cash: string;

for(let i = 0; i < 3; i ++) {
    from = prompt(`Введите расчетный сет платильщика ${i+1}`);
    while(!Validator.checkInputOnLength(from,6) && !Validator.getCheckedInput(from)){
        alert("Номер должен состоять только из 6 цифр");
        from = prompt(`Введите расчетный сет платильщика ${i+1}`);
    }
    to = prompt(`Введите расчетный счет получателя ${i+1}`);
    while(!Validator.checkInputOnLength(to, 6)){
        alert("Номер должен состоять только из 6 цифр");
        to = prompt(`Введите расчетный счет получателя ${i+1}`);
    }
    cash = prompt(`Введите сумму ${i+1}`);

    arrBill[i] = new Bill(Number(from), Number(to), Number(cash));
}

Bill.sort(arrBill);

console.log(arrBill);

console.log(Bill.serch(arrBill, prompt(`Поиск по счету отправителя`)));


