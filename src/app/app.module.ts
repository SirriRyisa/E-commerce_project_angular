import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./component/product/product.component";
import { HearComponent } from './component/hear/hear.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { ApiService } from "./service/api.service";


const routes: Routes = [
    {path: "", redirectTo: "product", pathMatch:"full"},
    {path:"product", component: ProductComponent},
    {path: "cart", component: CartComponent}
  ]

@NgModule({
    // declarations helps to define the app componnet as seen below
    declarations: [AppComponent, ProductComponent, HearComponent, CartComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule, 
        CommonModule, RouterModule.forRoot(routes),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase,),
    ],

    providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        ApiService
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}