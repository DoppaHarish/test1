import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from './itemservice.service';
import { Observable } from 'rxjs';
import { IitemList } from './itemModel';





@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(private _ser: ItemserviceService) { }

  public shppoingLists: IitemList[] = [];
  public TotalItemsL:number = 0;
  // page : number =1;

  ngOnInit(): any{
    debugger
    this._ser.getitems()
    // .subscribe((res : IitemList[])=>{
    //   this.shppoingLists = res,
    //   this.TotalItemsL = res.length;
    // });
    .subscribe((data) => {
      this.shppoingLists = data;
    });
  }

}
