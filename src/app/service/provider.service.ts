import { Injectable, Provider } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getProviders(request: any): Observable<any> {
    return this.http.get(`${this.host}/api/providers`, {params: request});
  }

  public addProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(`${this.host}/api/providers`, provider);
  }

  public deleteProvider(id: number): Observable<any> {
    return this.http.delete(`${this.host}/api/providers/${id}`);
  }
}
