import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderListComponent } from './provider-list/provider-list.component';

const routes: Routes = [
  {path: 'providers', component: ProviderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
