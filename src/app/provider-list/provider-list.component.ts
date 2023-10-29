import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../model/Provider';
import { ProviderService } from '../service/provider.service';
import { PageEvent } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  providers: Provider[] = [];
  totalElements: number = 0;
  saveError = '';

  constructor(public providerService: ProviderService) { }

  ngOnInit() { this.getProviders({ page: 0, size: 5 }); }

  private getProviders(request: any) {
    this.providerService.getProviders(request).subscribe({
      next: (data) => {
        this.providers = data['content'];
        this.totalElements = data['totalElements'];
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error.message);
      }
    });
  }

  nextPage(event: PageEvent) {
    const request = {
      page: event.pageIndex.toString(),
      size: event.pageSize.toString()
    };
    this.getProviders(request);
  }

  onDeleteProvider(id: number) {
    this.providerService.deleteProvider(id)
      .subscribe({
        next: (data) => {
          this.getProviders({ page: 0, size: 5 });
        }
        , error: (errorResponse) => {
          console.log(errorResponse.error.message);
        }
      });
  }

  public onAddNewProvider(userForm: NgForm): void {
    console.log(userForm)
    this.providerService.addProvider(userForm.form.value).subscribe({
      next: (response) => {
        this.clickButton('new-user-close');
        this.getProviders({ page: 0, size: 5 });
        userForm.reset();
        this.saveError = '';
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.saveError = errorResponse.error.message;
      }
    })
  }

  public saveNewProvider() {
    this.clickButton('new-user-save');
  }

  private clickButton(buttonId: string): void {
    document.getElementById(buttonId)?.click();
  }

}
