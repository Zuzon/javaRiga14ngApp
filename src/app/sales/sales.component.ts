import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(public service: ShopService) { }

  ngOnInit(): void {
  }

}
