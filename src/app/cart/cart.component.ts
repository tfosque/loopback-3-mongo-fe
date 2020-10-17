import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public $products = new BehaviorSubject<any[]>([]);

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.prodService.getProducts();
    this.prodService.$products.subscribe(p => {
      // console.log({ p });
      this.$products.next(p);
    });
  }

}
