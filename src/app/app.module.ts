import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHeaderComponent } from './container/default-layout/default-header/default-header.component';
import { DefaultFooterComponent } from './container/default-layout/default-footer/default-footer.component';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
