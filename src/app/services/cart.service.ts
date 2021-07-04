import { Injectable } from "@angular/core";
import { CartItem } from "../common/cartItem";
import { Product } from "../common/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartItems: CartItem[] = [];

    public addProductToCart(product: Product): void {
        for (let cartItem of this.cartItems) {
            if (cartItem.product.name == product.name) {
                cartItem.amount++;
                return;
            }
        }
        this.cartItems.push(new CartItem(product, 1));
    }

    public getTotalWithoutDiscount(): number {
        let result = 0;
        for (let cartItem of this.cartItems) {
            result += cartItem.amount * cartItem.product.price;
        }
        return result;
    }

    public getTotal(): number {
        let result = 0;
        for (let cartItem of this.cartItems) {
            result += cartItem.amount *
                (cartItem.product.price -
                    cartItem.product.price *
                    cartItem.product.discount);
        }
        return result;
    }
}
