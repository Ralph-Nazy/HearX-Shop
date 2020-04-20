import { Product  } from './product.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ProductsState extends EntityState<Product> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'Product'
})
export class ProductsStore extends EntityStore<ProductsState> {
  constructor() {
    super();
  }
}