import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  $products = new BehaviorSubject<any[]>([]);

  constructor(
    private readonly prodService: ProductsService
  ) { }

  ngOnInit() { }
}
