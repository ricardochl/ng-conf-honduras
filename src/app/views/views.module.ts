import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SpeakersComponent, SponsorsComponent, HomeComponent,
    HeroHeaderComponent, TeamComponent, TeamMemberComponent, SpeakerCardComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FontAwesomeModule
  ]
})
export class ViewsModule { }
