
export default class Price {
    productName = "";
    shopName = "";
    cost = 0;

    constructor(product, shop, cost){
        this.productName = product;
        this.shopName = shop;
        this.cost = cost;
    }
}