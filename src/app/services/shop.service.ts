import { Injectable } from "@angular/core";
import { Product } from "../common/product";

@Injectable({
    providedIn: 'root'
})
export class ShopService {
    public products: Product[] = [
        {
            name: 'maize',
            price: 0.81,
            discount: 0
        },
        {
            name: 'desa',
            price: 2.34,
            discount: 0.10
        },
        {
            name: 'sviests',
            price: 1.86,
            discount: 0
        },
        {
            name: 'milti',
            price: 2.01,
            discount: 0.15
        },
        {
            name: 'lasis',
            price: 3.33,
            discount: 0.05
        }
    ];

    public getDiscountedProducts(): Product[] {
        const result: Product[] = [];
        for (let prece of this.products) {
            if (prece.discount > 0) {
                result.push(prece);
            }
        }
        return result;
    }
}
