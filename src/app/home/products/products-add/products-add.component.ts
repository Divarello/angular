import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProdService} from '../../../services/prod.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  addProdForm = FormGroup;
  submitted = false ;
  constructor(public formBulder: FormBuilder , public prdsrv: ProdService , public router: Router) { }
/*

  {
            "name": "vikings",
            "price": "vikings desc",
            "category":"5c7a4a61dea251222cc7ec50"
        }
 */
  ngOnInit() {
    // @ts-ignore
    this.addProdForm = this.formBulder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    // @ts-ignore
    return this.addProdForm.controls;
  }
  go() {

    this.submitted = true ;
    // @ts-ignore
    if (this.addProdForm.invalid) {
      return ;
    }
    // @ts-ignore
    console.log(this.addProdForm.value);

    // @ts-ignore
    this.prdsrv.addProd(this.addProdForm.value).subscribe(res => {
      console.log(res);
      // @ts-ignore
      if (res.state === 'yes') {
        this.router.navigateByUrl('/products');
      } else {
        alert('not saved baby');
      }
    });
  }

}
