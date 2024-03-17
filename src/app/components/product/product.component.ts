import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { HeaderComponent } from "../../header/header.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [HeaderComponent]
})
export class ProductComponent implements OnInit{

productList: ProductInterface[]=[]; 
constructor(private productService: ProductService ) {} 
ngOnInit(): void {
this.getProducts()
}
getProducts(){
  this.productService.getProducts().subscribe({ 
    next:(result) => {
this,this.productList = result.products;
    }, 
    error:(err) => {
      console.log(err);
    }
  })
}
}
