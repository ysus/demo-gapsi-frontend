import { Injectable, Provider } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPreference } from '../model/UserPreference';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getUserPrefernce(): Observable<UserPreference> {
    return this.http.get<UserPreference>(`${this.host}/api/userPreference`);
  }

}
