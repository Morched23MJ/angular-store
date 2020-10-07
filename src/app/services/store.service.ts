import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  products = [];

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product)
  }

  getLatest() {
    if (this.products.length < 1) return null;
    return this.products[this.products.length - 1]
  }

  getStockTotal() {return this.products.length}
  getStockValue() {return this.products.reduce((a, b) => a + b['price'], 0)}
}
