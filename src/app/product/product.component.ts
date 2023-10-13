import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:any;
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getAll().subscribe((res)=>{
      console.table(res);
      this.product= res;
    })
  }
  deleteItem(pobj:any){
    this.service.deleteProduct(pobj);
  }
  update(p:any){
    p.pedit=false;
  }
  edit(p:any){
    p.pedit=true;
  }
}

