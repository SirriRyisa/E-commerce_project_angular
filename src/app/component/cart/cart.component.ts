import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { getCart, CartItem } from 'src/app/utils/storageManager';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  status = false;
  localStorecartItems: CartItem[] = [];
  updatedCartItems: CartItem[] = [];
  // sumTotal : number = 0

  ngOnInit(): void {
     this.localStorecartItems = getCart();
     this.updatedCartItems = this.getCartItems();
     if (this.updatedCartItems.length > 0) {
      this.status = true;
     } else {
      this.status = false;
     }
  }

  getCartItems(){
    let calculatedCartItems: CartItem[] = [];
    // let grantTotal = 0
    this.localStorecartItems.map((item:CartItem)=>{
      let itemId = item.id;
      if (calculatedCartItems.find(x => x.id == itemId)){
        let itemFound = calculatedCartItems.find(x => x.id == itemId);
        calculatedCartItems[0].subtotal +=  parseFloat(`${itemFound!.price}`);
      // let  subtotal: number =  calculatedCartItems[0].subtotal;
      // subtotal = subtotal +itemFound!.price as number
      // calculatedCartItems[0].subtotal = subtotal
        calculatedCartItems[0].quantity += 1;
        // calculatedCartItems[0].subtotal = itemFound!.price * itemFound!.quantity;
      }else {
        calculatedCartItems.push(item);
      }
    })
    return calculatedCartItems;
  }

  getTotalPrice(product: CartItem){
    // let grantTotal = 0
    // this.cartItems.map((a:any)=>{
    //   grantTotal += a.total;
    // })
  }

  // removeCardItem(products: any) {
  //   this.getCartItems.map((a: any, index:any)=>{
  //     if(products.id=== a.id){
  //       this.getCartItems.splice(index,1);
  //     }
  //   })
  // }

  // removeAllCart(){
  //   this.getCartItems = []
  //   this.productList.next(this.cartItems);
  // }
}
