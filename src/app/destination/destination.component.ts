import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

@Input() dataHash: any;

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    // center: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        // items: 2
        items: 1
      },
      740: {
        // items: 3
        items: 1
      },
      940: {
        items: 1
      },
      // 1440: {
      //   items: 1
      // }
    }
  }

}
