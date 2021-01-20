import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';


@NgModule({
  declarations: [SpeakersComponent, SponsorsComponent, HomeComponent, HeroHeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
