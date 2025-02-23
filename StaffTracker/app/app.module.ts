import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    EmpdetailsComponent,
    EmpeditComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
