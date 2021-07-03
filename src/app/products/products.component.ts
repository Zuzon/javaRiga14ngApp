import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public pageTitle: string = "Produkti";

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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
