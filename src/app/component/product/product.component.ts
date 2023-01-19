import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { setCart, getCart } from 'src/app/utils/storageManager';
import { ApiService } from 'src/app/service/api.service';


interface Product {
  title: string
  image: string
  description: string
  price: number

}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  // public productList : any;

  products : Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;

  constructor(appstore: AngularFirestore) {
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
       console.log(data);
    });
  }

  setCartItem(product: any) {
    setCart(product);
    console.log(getCart());
  }
}
