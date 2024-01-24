import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/ngrx-state/actions/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products$: Observable<any> | undefined;
  product: any;

  constructor(private store: Store<{ products: any }>, private router: Router) {
    this.products$ = store.select('products');
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  orderProductNow(product: any) {
    console.log('Product to be ordered: ', product);
  }

  removeProductNow(id: number) {
    console.log('Product to be removed: ', id);
  }
}
