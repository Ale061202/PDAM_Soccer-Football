import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from '@angular/forms';
import { MaterialImportsModule } from './modules/material-imports.module';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { DeleteDialogComponent } from './components/delete-team-dialog/delete-dialog.component';
import { EditTeamDialogComponent } from './components/edit-team-dialog/edit-team-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { EditLeagueDialogComponent } from './components/edit-league-dialog/edit-league-dialog.component';
import { DeleteLeagueDialogComponent } from './components/delete-league-dialog/delete-league-dialog.component';
import { DeletePlayerDialogComponent } from './components/delete-player-dialog/delete-player-dialog.component';
import { EditPlayerDialogComponent } from './components/edit-player-dialog/edit-player-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DeleteDialogComponent,
    EditTeamDialogComponent,
    EditLeagueDialogComponent,
    DeleteLeagueDialogComponent,
    DeletePlayerDialogComponent,
    EditPlayerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
