import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductsService {
  public apiUrl = 'https://my.api.mockaroo.com/javascript-store-product.json?key=c1a35bd0';
  public lb3ApiPost =
      'http://localhost:3000/api/shoppingcarts?access_token=SbOW7yDE6kKcV75lOmEe5NEm7jregItLEtr3olgDE2BwQ9XFYgUrdMDKdUcF7DYr';
  public lb3ApiGet = 'http://localhost:3000/api/shoppingcarts';

  $products = new BehaviorSubject<any[]>([]);
  constructor(
    private readonly http: HttpClient

  ) { }


  public getProducts() {
    this.http.get<any[]>(this.lb3ApiGet)
      .subscribe(subs => {
       // console.log('subs', { subs });
        this.$products.next(subs);
      });
  }

  public postProduct(product: any) {
    this.http.post<any>(this.lb3ApiPost, product, {});
  }
}
