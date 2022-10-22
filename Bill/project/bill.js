export default class Bill {
    constructor(from, to, cash) {
        this.from = from;
        this.to = to;
        this.cash = cash;
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
    static serch(arr, str) {
        let result = [];
        for (let i = 0, j = 0; i < arr.length; i++) {
            if (Number(str) === arr[i].from) {
                result.push(`С вашго счета списано ${arr[i].cash}`);
                j++;
            }
            if (j == 0 && i == arr.length - 1) {
                result.push("Перевода не было");
            }
        }
        return result;
    }
}
