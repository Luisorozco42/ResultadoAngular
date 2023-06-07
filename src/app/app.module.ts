import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultadoModule } from './resultado/resultado.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/sidebar.module';
import { AppRoutingModule } from './app-routing.moodule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ResultadoModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
