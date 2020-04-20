import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product.component';
import { CartComponent } from './components/cart.component';

const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);