import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SDKModule } from './shared/sdk/index';

import { AppComponent } from './app.component';
import { CreateComponent } from './model/create/create.component';

@NgModule({
  declarations: [
  AppComponent,
  CreateComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  SDKModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
