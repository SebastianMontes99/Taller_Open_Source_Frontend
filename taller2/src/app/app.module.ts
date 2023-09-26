import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterOfferComponent } from './components/register-offer/register-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateOfferComponent,
    RegisterOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
