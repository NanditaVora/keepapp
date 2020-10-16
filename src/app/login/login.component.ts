import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,
    private routeService: RouteService
    ) { }

  ngOnInit(): void {
  }

  errorMessage: string;

  loginForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    }
  )

  login(){
    console.log('logging in....')
    console.log(this.loginForm.value);
    // console.log(this.getUsername())
    // console.log(this.getPassword())

    this.authService.validateUser(this.loginForm.value)
      .subscribe(data=>{
        console.log('success')
        console.log(data['token'])
        this.authService.setToken(data['token'])
        this.routeService.toHome(this.getUsername().value);
      },
      error=>{
        console.log(error)
        this.errorMessage = 'Unauthorized'
      }
      )
  }

  getUsername()
  {
    return this.loginForm.get('username');
  }

  getPassword(){
    return this.loginForm.get('password');
  }
  getUserNameErrorMessage(){
    if(this.getUsername().invalid && (this.getUsername().dirty || this.getUsername().touched))
      return 'Username should not be left blank'
    else
      return ''

  }

  getPasswordErrorMessage(){
    if(this.getPassword().invalid && (this.getPassword().dirty || this.getPassword().touched))
      if(this.getPassword().hasError('required'))
        return 'Password should not be left blank'
      else if(this.getPassword().hasError('minlength'))
        return 'Password should be atleast 6 characters long'
    else
      return ''
  }
}
