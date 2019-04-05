import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false ;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }
  get f(){
    return this.loginForm.controls;
  }

  go(){
    this.submitted=true ;
    if (this.loginForm.invalid){
      return ;
    }
    console.log(this.loginForm.value);
    console.log(this.loginForm.get('email').value)
    console.log(this.loginForm.get('password').value)
  }
}
