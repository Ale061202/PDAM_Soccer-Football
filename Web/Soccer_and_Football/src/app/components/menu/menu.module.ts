import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-rooting.module';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LeagueComponent } from './view/league/league.component';
import { PlayerComponent } from './view/player/player.component';
import { TeamComponent } from './view/team/team.component';
import { UserComponent } from './view/user/user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LeagueComponent,
    PlayerComponent,
    TeamComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }