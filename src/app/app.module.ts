import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WwaComponent } from './wwa/wwa.component';
import { WwoComponent } from './wwo/wwo.component';
import { CardComponent } from './card/card.component';
import { PricingComponent } from './pricing/pricing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { PricingCardLgComponent } from './pricing-card-lg/pricing-card-lg.component';
import { PricingCardMdComponent } from './pricing-card-md/pricing-card-md.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WwaComponent,
    WwoComponent,
    CardComponent,
    PricingComponent,
    SliderComponent,
    PricingCardLgComponent,
    PricingCardMdComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
