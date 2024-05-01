import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  hide = true;
  loginForm: FormGroup;
  responseMsg: string = '';

  constructor(
    private fb: FormBuilder,private api:ApiService,private route:Router
//    private api: ApiService,
    //private router: Router
  ) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
    });
  }

  login() {
    let loginInfo = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.api.LoginUser(loginInfo).subscribe({
      next:(resp:any)=>{
        console.log('resp is'+resp)
    //    debugger;
        if(resp=='Invalid'){
          this.responseMsg='Invalid Email or Password';
        }
        else{
          this.responseMsg='';
          this.api.saveToken(resp);
          this.route.navigateByUrl("/books/library");
        }

      },error:(err:any)=>{
        console.error("error",err);

      }
    }
  )}
  getEmailErrors() {
    if (this.Email.hasError('required')) return 'Email is required!';
    if (this.Email.hasError('email')) return 'Email is invalid.';
    return '';
  }

  getPasswordErrors() {
    if (this.Password.hasError('required')) return 'Password is required!';
    if (this.Password.hasError('minlength'))
      return 'Minimum 8 characters are required!';
    if (this.Password.hasError('maxlength'))
      return 'Maximum 15 characters are required!';
    return '';
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
