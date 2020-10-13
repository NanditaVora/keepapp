import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  isUserAuthenticated(token: string):Promise<boolean>{
    return this.httpClient.post(`http://localhost:3000/auth/v1/isAuthenticated`,{},{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    })
    .pipe(map(response=>response["isAuthenticated"])).toPromise(); 
  }

}
