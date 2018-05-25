import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ProductEditComponent } from './modules/products/product-edit/product-edit.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';

const routes: Routes = [
  { path:'',
    component: WelcomeComponent
  },
  { path:'products',
    component: ProductListComponent
  },
  { path:'products/details',
    component: ProductDetailComponent
  },
  { path:'products/edit',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
