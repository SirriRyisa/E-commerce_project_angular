import { Component, OnInit } from '@angular/core';
import { getCart } from 'src/app/utils/storageManager';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.css']
})
export class HearComponent implements OnInit {
     cartCount = 0;

    ngOnInit(): void {
       this.cartCount = getCart().length;
       setInterval(()=>{
        this.cartCount = getCart().length;
       },500);
    }

    updatedCount(event:any){
      console.log(event);
      // this.cartCount= count;
    }

}
