import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProdService} from '../services/prod.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UsersComponent} from '../home/users/users.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false ;

  constructor(private formbuilder: FormBuilder, public userserv: AuthService, private router: Router) { }

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
    const user={
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.userserv.addUser(user).subscribe(res=>{
      console.log(res);
      if (res.status === 'success') {
        localStorage.setItem('state', '1');
        localStorage.setItem('token',res.data.token );
        this.router.navigateByUrl('/products')
      }
    })

  }
}
