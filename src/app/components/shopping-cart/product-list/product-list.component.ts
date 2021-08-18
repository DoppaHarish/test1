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

  ngOnInit(): any{
    debugger
    this._ser.getitems()
    .subscribe((res : IitemList[])=>{
      this.shppoingLists = res;
    });
  }

}
