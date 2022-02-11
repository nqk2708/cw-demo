import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleMenu = false
  scrolled = false
  
  constructor() { }

  ngOnInit(): void {
    this.animateHeader();

  }

  handleMenu() {
    this.toggleMenu = !this.toggleMenu
  }
  animateHeader() {
    window.onscroll = () => {
    if (window.pageYOffset > 120) 
        this.scrolled  = true;
    else 
        this.scrolled  = false;
    }
  }
}
