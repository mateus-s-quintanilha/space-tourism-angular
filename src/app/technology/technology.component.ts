import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  buttons: any = document.getElementsByClassName('button')

  constructor() { }

  ngOnInit(): void {
  }


  changeButton1(botaoClicado: any) {

    let arrayButtons = Array.from(this.buttons)

    arrayButtons.forEach((button: any) => {
      if(button.hasAttribute("id")) {
        button.removeAttribute("id")
      }
    })

    botaoClicado.setAttribute("id", "btn-clicked")

    let text: any = document.querySelector('.section > p')
    text.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"

    let title: any = document.querySelector('.info-content-title > h2')
    title.innerHTML = 'LAUNCH VEHICLE'

    let img: any = document.querySelector('.image > img')
    img.src = '../../assets/technology/image-launch-vehicle-portrait.jpg' 
  }

  changeButton2(botaoClicado: any) {
    let arrayButtons = Array.from(this.buttons)

    arrayButtons.forEach((button: any) => {
      if(button.hasAttribute("id")) {
        button.removeAttribute("id")
      }
    })

    botaoClicado.setAttribute("id", "btn-clicked")  
    
    let text: any = document.querySelector('.section > p')
    text.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."

    let title: any = document.querySelector('.info-content-title > h2')
    title.innerHTML = 'SPACEPORT'

    let img: any = document.querySelector('.image > img')
    img.src = '../../assets/technology/image-spaceport-portrait.jpg'   
  }

  changeButton3(botaoClicado: any) {
    let arrayButtons = Array.from(this.buttons)

    arrayButtons.forEach((button: any) => {
      if(button.hasAttribute("id")) {
        button.removeAttribute("id")
      }
    })

    botaoClicado.setAttribute("id", "btn-clicked")

    let text: any = document.querySelector('.section > p')
    text.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."

    let title: any = document.querySelector('.info-content-title > h2')
    title.innerHTML = 'SPACE CAPSULE'
    
    let img: any = document.querySelector('.image > img')
    img.src = '../../assets/technology/image-space-capsule-portrait.jpg'   
  }
  
}
