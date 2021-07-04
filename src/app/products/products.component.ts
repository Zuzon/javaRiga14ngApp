import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public pageTitle: string = "Produkti";

  constructor(public service: ShopService) { }

  ngOnInit(): void {
  }

}
