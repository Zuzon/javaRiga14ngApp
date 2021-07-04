import { Product } from "./product";

export class CartItem {
    public product: Product;
    private _amount: number;
    public get amount(): number {
        if (isNaN(this._amount)) {
            return 0;
        }
        return this._amount;
    }
    public set amount(value: number) {
        if (value as any === '') {
            this._amount = 0;
            return;
        }
        if (typeof value === 'string') {
            this._amount = parseInt(value);
            return;
        }
        this._amount = value;
    }

    constructor(product: Product, amount: number) {
        this.product = product;
        this._amount = amount;
    }
}
