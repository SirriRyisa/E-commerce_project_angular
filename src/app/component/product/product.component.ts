import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { setCart, getCart, CartItem } from 'src/app/utils/storageManager';
import { ApiService } from 'src/app/service/api.service';
import { HearComponent } from '../hear/hear.component';


class Product {
  id:number =0
  title: string =''
  image: string =''
  description: string =''
  price: number = 0
  quantity: number = 1
  total: number = 0
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  // public productList : any;

  @Output() cartcount = new EventEmitter<any>();

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;

  constructor(appstore: AngularFirestore, private ref: ChangeDetectorRef) {
    this.productsCollection = appstore.collection<Product>('M@rv&l0usE');
    this.products = this.productsCollection.valueChanges();
  }

  ngOnInit(): void {
    // this.api.getProducts()
    // .subscribe(res =>{
    //   this.productList = res;
    // })
      
  }

  ngAfterViewInit(): void {
    this.products.subscribe((data) => {
      // this.products.forEach((a: any) =>{
      //   Object.assign(a,{quantity:1, total:a.price});
      // })
       console.log(data);
    });
  }

  setCartItem(product: any) {
    product["quantity"] = 1;
    product["subtotal"] = 1 * parseFloat(product["price"]);
    setCart(product);
    this.ref.detectChanges();
  }


}
