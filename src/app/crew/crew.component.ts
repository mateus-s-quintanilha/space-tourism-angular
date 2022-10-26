import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

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
      }
    }
  }

}
