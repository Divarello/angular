import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  registerForm: FormGroup;

  submitted = false ;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      userName:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      Cpassword:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  go(){
    this.submitted=true ;
    if (this.registerForm.invalid){
      return ;
    }
    console.log(this.registerForm.value);
  }

}
