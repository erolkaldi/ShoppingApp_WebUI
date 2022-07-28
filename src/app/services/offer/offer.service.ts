import { Injectable } from '@angular/core';
import { apiEndPoints } from 'src/environments/apiEndPoints';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpService:HttpService) { }
  getActiveOffers(){
    return this.httpService.get(apiEndPoints.definition.offer.getActiveOffers);
  }
}
