import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchDetailsCardComponent } from './match-details-card/match-details-card.component';
import { MatchSmallCardComponent } from './match-small-card/match-small-card.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { HttpClientModule } from '@angular/common/http';  


@NgModule({
  declarations: [
    AppComponent,
    MatchDetailsCardComponent,
    MatchSmallCardComponent,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
