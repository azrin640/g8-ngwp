import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent} from './home/home.component';
import { TestService } from './services/test/test.service';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from './material.module';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';
import { ProductsService } from './services/products/products.service';
import { RegisterComponent } from './register/register.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TesterComponent, ExDialog } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavComponent,
    ExDialog,
    LoginComponent,
    RegisterComponent,
    PromotionsComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    TestService,
    AuthService,
    ProductsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ExDialog
  ]
})
export class AppModule { }
