import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
@Input() title:string='';
@Input() subtitle:string='';
@Input() imgUrl:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
