import { Component, OnInit } from '@angular/core';
import { OfferDto } from 'src/app/models/offers/OfferDto';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.scss']
})
export class OfferSectionComponent implements OnInit {

  constructor(private offerService:OfferService) { }
 offers:OfferDto[];
  ngOnInit(): void {
    this.offerService.getActiveOffers().subscribe((response) => {
      this.offers=response;
      }
    );
  }

}
