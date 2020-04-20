import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductsStore } from './products.store';
import { ProductsQuery } from './products.query';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private products: Product[];

 constructor(private productsStore: ProductsStore, 
              private productsQuery: ProductsQuery) {
        this.products = [{ 
                "id": 1, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Coffee beans - 1kg Dark Roast", // name of product
                "price": 120 //product price 
                }, { 
                "id": 2, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Yorkshire tea - 100 tea bags", // name of product 
                "price": 156 //product price 
                }, { 
                "id": 3, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Altered Carbon Season 2", // name of product 
                "price": 450 //product price 
                }, { 
                "id": 4, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Sony WF-1000XM3 True Wireless Noise Canceling", // name of product 
                "price": 600 //product price 
                }, { 
                "id": 5, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Macbook Pro 2019 Model 16gb RAM", // name of product 
                "price": 200 //product price 
                }, { 
                "id": 6, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Asus GL752 gaming laptop", // name of product 
                "price": 602 //product price 
                }, { 
                "id": 7, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "Guinness Draught Cans 440ml 2x Six Packs", // name of product 
                "price": 900 //product price 
                }, { 
                "id": 8, // Unique Id of the product 
                "image": "https://picsum.photos/200", // image of the product 
                "name": "6 Man Tent - Dark blue", // name of product 
                "price": 4000 //product price 
                }];
    }


  findAll(): Product[] {
        return this.products;    }

find(id: number): Product {
        return this.products[this.getSelectedIndex(id)];
}

    private getSelectedIndex(id: number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}