import { Component, OnInit } from '@angular/core';
import { Product } from '../state/product.model';
import { ProductsService } from '../state/products.service';

@Component({
 	//changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'index.component.html'
})

export class ProductComponent implements OnInit {

	public products: Product[];

	constructor(
		private productsService: ProductsService
	) { }

	ngOnInit() {
		this.products = this.productsService.findAll();
	}


}