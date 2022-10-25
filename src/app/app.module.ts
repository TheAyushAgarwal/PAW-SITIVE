import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SponcerComponent } from './sponcer/sponcer.component';
import { ContactComponent } from './contact/contact.component';

import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    SponcerComponent,
    ContactComponent,
    DetailsComponent,
    TeamComponent,
    HomeComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    CarouselPauseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
