import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AccountComponent } from './account/account.component';
import { CardComponent } from './_shared/card/card.component';
import { CollapseComponent } from './_shared/collapse/collapse.component';
import { LoginComponent } from './access-control/login/login.component';
import { CreateAccountComponent } from './access-control/create-account/create-account.component';
import { ModalComponent } from './_shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    ListViewComponent,
    AccountComponent,
    CardComponent,
    CollapseComponent,
    LoginComponent,
    CreateAccountComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
