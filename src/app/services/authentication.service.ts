import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  validateUser(user):Observable<Object>{
    return this.httpClient.post('http://localhost:3000/auth/v1',user);
  }

  setToken(token: string):void{
    localStorage.setItem('authToken',token)
  }

  getToken(): string{
    return localStorage.getItem('authToken')
  }

  removeToken(): void{
    localStorage.removeItem('authToken')
  }

}
