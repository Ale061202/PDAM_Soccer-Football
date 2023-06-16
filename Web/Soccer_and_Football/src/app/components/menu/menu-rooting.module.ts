import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { LeagueComponent } from './view/league/league.component';
import { PlayerComponent } from './view/player/player.component';
import { TeamComponent } from './view/team/team.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'leagues', component: LeagueComponent},
      {path:'players', component: PlayerComponent},
      {path:'teams', component: TeamComponent}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }