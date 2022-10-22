import Validator from "./validator.js";

export default class Bill {
    from: number;
    to: number;
    cash: number;
    
    constructor(from: number, to: number, cash: number){
        this.from = from;
        this.to = to;
        this.cash = cash;
    }

    static sort(arr: Bill[]): Bill[] {
        return arr.sort((a, b) => {
            if(a.from > b.from) {
                return 1;
            } else if (a.from < b.from) {
                return -1;
            }
            return 0;
        });
    }

    static serch(arr: Bill[], str: string): string[] {
        let result: string[] = [];

        for(let i = 0, j = 0; i < arr.length; i++) {
            if(Number(str) === arr[i].from) {
                result.push(`С вашго счета списано ${arr[i].cash}`);
                j++;
            }

            if(j == 0 && i == arr.length - 1){
                result.push("Перевода не было");
            }
        }
        return result;
    }
}