import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

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
      },
      error=>{
        console.log(error)
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
