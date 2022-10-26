import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'space-app';

  currentRoute: any

  url: any

  body: any

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.router.events.forEach(async event => {
    //   // console.log(event instanceof NavigationEnd? event : 'nada')
    //   if(event instanceof NavigationEnd) {
    //     this.url = await event.url
    //     console.log(this.url)
    //   } else {
    //     return
    //   }
    // })

    this.getUrl()

  }


  getUrl() {
    this.router.events.forEach(event => {
      if(event instanceof NavigationEnd) {

        this.url = event.url
        console.log('dando certo: ',this.url)
        this.body = document.getElementById('body') 

        if(this.url == '/' || this.url =='/home') {
          this.body.setAttribute("class", "home") 

        } else if(this.url == '/destination') {
          this.body.setAttribute("class", "dest")
        } else if(this.url == '/crew') {
          this.body.setAttribute("class", "crew")
        } else if (this.url == '/technology') {
          this.body.setAttribute("class", "technology")
        }

      } else {
        return
      }
    })
  }

  // async applyUrl() {
  //   await this.getUrl()
  //   .then((url) => {
  //     console.log('URL no OnInit: ', url)
  //   })


  //   // this.body = document.getElementById('c') 

  //   // console.log('elemento: ', this.body);
    
  // }
  
}
