export default class Bill {
    from = "";
    to = "";
    cash = 0;

    constructor(from, to, cash){
        this.from = from;
        this.to = to;
        this.cash = cash;
    }
}