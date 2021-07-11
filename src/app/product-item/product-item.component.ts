import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../common/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  public item: Product;

  @Output()
  public onAdd: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

}
