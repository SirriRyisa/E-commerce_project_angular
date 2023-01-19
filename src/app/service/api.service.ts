import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(private http : HttpClient) { }

//   getProducts(){
//     return this.http.get<any>("https://fakestoreapi.com/products/")
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }
// }




@Injectable()
  export class ApiService {
    // products$ : Observable<Product[]>;
    // productsCollection: AngularFirestoreCollection<Product>;

    // constructor(private appstore: AngularFirestore) {
    //   this.productsCollection = appstore.collection<Product>('product');
    //   this.products$ = this.productsCollection.valueChanges();
    // }
  }