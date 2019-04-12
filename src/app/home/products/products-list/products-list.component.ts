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
      console.log(res);
      // @ts-ignore
      this.prods = res.msg;
    });

  }

  remove(id) {
    this.prodserv.removeProd(id).subscribe(res => {
      console.log(res);
      this.loadData()
    });

  }

}
