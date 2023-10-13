import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private service: ProductService, private route:Router){}
  pid:any;
  pname:any;
  pprice:any;
  pfeatures:any;
  pimg:any;
  pobj:any;

  adding(){
    this.pobj={
      productId: this.pid,
      productName:this.pname,
      productPrice:this.pprice,
      productFeatures:this.pfeatures,
      productImg:this.pimg
    }
    this.service.addProduct(this.pobj);
    this.route.navigateByUrl('/product');
  }
}



