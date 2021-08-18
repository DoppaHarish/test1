import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fliters',
  templateUrl: './fliters.component.html',
  styleUrls: ['./fliters.component.sass']
})
export class FlitersComponent implements OnInit {

  constructor() { }
  Brnads: any = ['Angular', '.net'];
  price : any =[ 10,20];
  ngOnInit(): void {
  }

}
