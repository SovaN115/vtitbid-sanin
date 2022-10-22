export default class Bill {
    constructor(from, to, cash) {
        this.from = from;
        this.to = to;
        this.cash = cash;
    }
    static checkInput(func) {
        let input = func();
        input = input !== null && input !== undefined && input !== "" ? input : this.checkInput(func);
        return input;
    }
    static sort(arr) {
        return arr.sort((a, b) => {
            if (a.from > b.from) {
                return 1;
            }
            else if (a.from < b.from) {
                return -1;
            }
            return 0;
        });
    }
    static serch(arr) {
        let serch;
        serch = this.checkInput(() => { return prompt("Поиск инфорации по переводу введите счет"); });
        for (let i = 0; i < arr.length; i++) {
            if (Number(serch) === arr[i].from) {
                return `С вашго счета списано ${arr[i].cash}`;
            }
            else if (i == arr.length) {
                return "Такого счета нет";
            }
        }
    }
}
