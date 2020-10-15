import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router,
    private location: Location) { }

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

  toEditNote(noteId: number){
    this.router.navigate(['home',
    {
      outlets:{
        editOutlet: [noteId,'edit']
      }
    }])
  }

  toPrevious(){
    this.location.back();
  }
}
