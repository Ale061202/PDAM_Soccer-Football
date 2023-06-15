import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-rooting.module';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LeagueComponent } from './view/league/league.component';
import { PlayerComponent } from './view/player/player.component';
import { TeamComponent } from './view/team/team.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    DashboardComponent,
    LeagueComponent,
    PlayerComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatPaginatorModule
  ]
})
export class MenuModule { }