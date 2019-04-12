import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  registerForm: FormGroup;

  submitted = false ;

  constructor(private formbuilder: FormBuilder , public userserv: AuthService , private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  go() {
    this.submitted = true ;
    if (this.registerForm.invalid) {
      return ;
    }
    console.log(this.registerForm.value);
    const user = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      phone: '51754522',
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };
    this.userserv.addNewUser(user).subscribe(res => {
      console.log(res);
      // @ts-ignore
      if (res.state === 'yes') {
        const login =  {
          email: this.registerForm.get('email').value,
          password: this.registerForm.get('password').value
        };

        this.userserv.addUser(login).subscribe(res => {
          console.log(res);
          // @ts-ignore
          if (res.status === 'success') {
            localStorage.setItem('state', '1');
            // @ts-ignore
            localStorage.setItem('token', res.data.token );
            this.router.navigateByUrl('/products');
          }
        });
      }
    });
  }

}
