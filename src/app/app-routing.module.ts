import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistreComponent} from './registre/registre.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ContactComponent} from './home/contact/contact.component';
import {UsersComponent} from './home/users/users.component';
import {AuthguardGuard} from './authguard.guard';
const routes: Routes = [
  { path: '', component: HomeComponent,  children: [
      {path : '', component: ContactComponent},
      {path : 'users', component: UsersComponent},
      {
        path: 'products',
        loadChildren: './home/products/products.module#ProductsModule'
      }
    ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
