import { Component, OnInit } from '@angular/core';
import {ProdService} from '../../../services/prod.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  prods;
  constructor( public prodserv: ProdService ) { }

  ngOnInit() {

    this.loadData();
  }

  loadData() {
    this.prodserv.getAll().subscribe(res => {
      console.log(res.msg);
      this.prods = res.msg;
    });

  }

}
