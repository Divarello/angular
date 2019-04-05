import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule

  ]
})
export class ProductsModule { }
