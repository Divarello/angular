import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsAddComponent, UpdateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule

  ]
})
export class ProductsModule { }
