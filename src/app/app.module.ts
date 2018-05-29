import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { ProductsComponent } from './modules/products/products.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductEditComponent } from './modules/products/product-edit/product-edit.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './core/pipes/reverse.pipe';
import { MomentPipe } from './core/pipes/moment.pipe';
import { StarRatingComponent } from './core/components/star-rating/star-rating.component';
import { ProductService } from './core/models/product/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    WelcomeComponent,
    ReversePipe,
    MomentPipe,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
