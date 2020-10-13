import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  toHome(username: string){
    this.router.navigate(['home',{
      "userid": username
    }],
    {
      queryParams:{
        "loginTime": new Date().toTimeString()
      }
    })
  }

  toLogin(){
    this.router.navigate(['login'])
  }
}
