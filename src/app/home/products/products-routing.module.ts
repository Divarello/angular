import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsAddComponent} from './products-add/products-add.component';

const routes: Routes = [
  {path: '' , component : ProductsListComponent},
  {path: 'add' , component : ProductsAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
