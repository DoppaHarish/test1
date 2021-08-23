import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./hearder.css']
})
export class HeaderComponent implements OnInit {

  ImagePath: string;
  constructor() {
    this.ImagePath = '/assets/images/banner.png'
   }

  ngOnInit(): void {
  }

}
