import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: any
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data
    })
  }

}
