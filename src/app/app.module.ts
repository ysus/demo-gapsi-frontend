import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProviderService } from './service/provider.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProviderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
