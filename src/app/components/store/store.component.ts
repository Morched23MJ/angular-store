import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {

  productForm: FormGroup;
  products;
  error: any;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'reference': new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9]+[ ][a-zA-Z0-9]+$')
      ]),
      'price': new FormControl('', [
        Validators.required
      ])
    });
    this.products = this.store.getProducts();
    console.log(this.products);

  }

  get reference() { return this.productForm.get('reference'); }
  get price() { return this.productForm.get('price'); }

  onSubmit() {
    let product = {
      reference: this.reference.value,
      price: this.price.value
    }
    this.store.addProduct(product);
  }

}
