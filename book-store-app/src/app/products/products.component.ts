import { Component } from '@angular/core';
import { Router } from 'express';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private productService: ProductService, private router: Router) {}
  products: any[] = [];
  product: any;
}
