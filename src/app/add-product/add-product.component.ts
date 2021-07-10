import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../common/product';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public productForm: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      discount: ['', [
        Validators.required,
        Validators.pattern('^(([0-9]*)|(([0-9]*)\.([0-9]*)))$'),
        Validators.min(0),
        Validators.max(100)]],
      price: ['', [
        Validators.required,
        Validators.pattern('^(([0-9]*)|(([0-9]*)\.([0-9]*)))$'),
        Validators.min(0)]]
    });

  public isProductAdded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private shopService: ShopService) { }

  ngOnInit(): void {
  }

  public submit(): void {
    let newProduct: Product = {
      name: this.productForm.value.name,
      price: parseFloat(this.productForm.value.price),
      discount: parseFloat(this.productForm.value.discount) / 100
    };
    this.shopService.products.push(newProduct);
    this.isProductAdded = true;
    this.productForm.reset();
  }

}
