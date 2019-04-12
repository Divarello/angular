import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegistreComponent} from './registre/registre.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './home/contact/contact.component';
import { UsersComponent } from './home/users/users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { LayoutComponent } from './home/layout/layout.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginComponent,
    RegistreComponent,
    NotfoundComponent,
    ContactComponent,
    UsersComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
