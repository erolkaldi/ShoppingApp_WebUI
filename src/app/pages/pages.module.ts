import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { OfferItemComponent } from './partials/offer-item/offer-item.component';
import { OfferSectionComponent } from './partials/offer-section/offer-section.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    OfferItemComponent,
    OfferSectionComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    TranslocoModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  exports:[NavbarComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PagesModule { }
