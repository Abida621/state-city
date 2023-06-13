import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { ResultComponent } from './components/result/result.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CitiesListComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
