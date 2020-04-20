import { Product } from './product.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsQuery {
 	product: Product;
    quantity: number;
}