import { TeamComponent } from './pages/team/team.component';
import { HomeComponent } from './pages/home/home.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'speakers',
    component: SpeakersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
