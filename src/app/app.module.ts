import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  ApiService,
  UserService,
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
