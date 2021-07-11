import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { CartService } from '../services/cart.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public pageTitle: string = "Produkti";

  constructor(public service: ShopService, public cartService: CartService) { }

  ngOnInit(): void {
  }

  public onProductAddToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }

}
