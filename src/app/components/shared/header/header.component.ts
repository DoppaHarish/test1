import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  ImagePath: string;
  constructor() {
    this.ImagePath = '/assets/images/offers.jpg'
   }

  ngOnInit(): void {
  }

}
