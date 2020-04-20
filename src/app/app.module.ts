import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './components/cart.component';
import { ProductsService } from './state/products.service';


import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [	
    BrowserModule,
    CommonModule,
    routing
  ],
  providers: [
  ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
