import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProviderListComponent } from './provider-list/provider-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'providers', component: ProviderListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
