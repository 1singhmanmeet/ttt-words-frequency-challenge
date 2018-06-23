import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FrequencyService} from './frequency.service';
import { AppComponent } from './app.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrequencyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FrequencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
