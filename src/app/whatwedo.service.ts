import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatwedoService {

  constructor() { }
  public getCards() {
    let cards: Card[]

    const card1 = new Card()
    card1.heading = "Business Process System"
    card1.description = "The management of finance and business information, such as balance sheets, income statements, production information and cash flows can all be improved significantly with the systems that COZ Work can develop for you.",
    card1.actived = false
    card1.index = 1
    card1.details = [
      'Sales / Inventory Management System',
      'Production Management System',
      'Sales Management System',
      'Logistics System',
      'Next Generation Security System'
    ]

    const card2 = new Card()
    card2.heading = "Mobile Application And Games"
    card2.description = "A main focus of COZ Work is the development of apps for Smartphones. All general operating systems are supported, including iOS, Android and Windows. Applications can be web-based, native or hybrid. Apps are tailor-made, so developed to your needs.",
    card2.actived = false
    card2.index = 2
    card2.details = [
      'AR Video Playback',
      'Sharing Data while on-call',
      'Stock Market',
      'HTML5 Game',
      'Internal Meeting System'
    ]

    const card3 = new Card()
    card3.heading = "Custom apps and API integrations"
    card3.description = "Running digital campaigns requires connecting many moving parts such as CMS, CRM, analytics, email marketing, reservations etc. We excel at building integrations between WordPress, Shopify, BigCommerce and multiple platforms.",
    card3.actived = false
    card3.index = 3
    card3.details = [
      'Analytics: Google Analytics, Google Tag Manager, Segment, Facebook',
      'Event / Ticketing: EventBrite, Fandango',
      'Job boards: Greenhouse API',
      'Email: Constant Contact, MailChimp',
      'Custom API endpoints development',
      'Custom API integration'
    ]

    const card4 = new Card()
    card4.heading = "Technical consulting"
    card4.description = "Having trouble growing your agency? Feeling constantly overwhelmed despite your 100-hour work week? We can help you get more business but less busy by implementing long-term technical strategies.",
    card4.actived = false
    card4.index = 4
    card4.details = [
      'Dedicated offshore developers',
      'Maintenance / Overflow workload optimization',
      'Custom automated build system (Webpack, Gulp)',
      'Continuous Delivery / Continuous Integration',
      'Automated visual testing',
      'Custom devops / Automation service'
    ]

    cards = [card1, card2, card3 ,card4]

    return cards
  }
}

export class Card {
  heading !:string
  description !:string
  actived !:boolean
  index !:number
  details !:any[]

  // constructor(
  //   heading :string,
  //   description :string,
  //   actived :boolean,
  //   index :number,
  //   details :[]) {
  //     this.heading = heading
  //     this.description = description
  //     this.actived = actived
  //     this.index = index
  //     this.details = details
  // }
}
