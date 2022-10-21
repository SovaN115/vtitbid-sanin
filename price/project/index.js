import Price from "./price.js";
let arrPrice = []; 
let name = "";
let shop = "";
let cost = 0;
let serch = "";

for(let i = 0; i < 3; i ++) {
    name = prompt(`Введите название товара ${i+1}`);
    shop = prompt(`Введите название магазина ${i+1}`);
    cost = prompt(`Введите цену ${i+1}`);
    arrPrice[i] = new Price(name, shop, cost);
}

arrPrice.sort((a, b) => {
    if(a.productName.toLowerCase() > b.productName.toLowerCase()) {
        return 1;
    } else if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
        return -1;
    }
    return 0;
});

serch = prompt("Поиск по магазину").toLowerCase();

for(let i = 0, j = 0; i < arrPrice.length; i++) {
    if(serch === arrPrice[i].shopName) {
        console.log(arrPrice[i]);
        j++;
    } else if (i == arrPrice.length && j > 0) {
        console.log("Такого магазина нет")
    }
}
console.log(arrPrice);

