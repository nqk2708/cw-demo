import { Component, OnInit } from '@angular/core';
import { Card, WhatwedoService } from '../whatwedo.service';

@Component({
  selector: 'whatwedo-page',
  templateUrl: './whatwedo-page.component.html',
  styleUrls: ['./whatwedo-page.component.css']
})
export class WhatwedoPageComponent implements OnInit {

  cards !:Card[]
  constructor(private wwdoService :WhatwedoService) { 
    this.cards = this.wwdoService.getCards()

  }

  ngOnInit(): void {
  }

  readDetail(e:any, index: number) {
    e.stopPropagation()
    e.target.parentElement.style.transform = 'rotateY(360deg)'
    e.target.parentElement.style.backgroundColor = 'var(--c-primary)'
    this.cards[index-1].actived = true
  }

  rotateDetail(e:any, index: number) {
    e.target.closest('.wwdo__main__card').style.transform = 'rotateY(0deg)'
    e.target.closest('.wwdo__main__card').style.backgroundColor = 'unset'
    this.cards[index-1].actived = false
  }
}
