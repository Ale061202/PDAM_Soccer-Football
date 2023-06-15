import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/components/delete-team-dialog/delete-dialog.component';
import { EditLeagueDialogComponent } from 'src/app/components/edit-league-dialog/edit-league-dialog.component';
import { League } from 'src/app/models/leagueResponse.interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  page = 0;
  pageSize = 5;
  totalElements = 0;
  leagueList: League [] = [];

  constructor(
    private dialog: MatDialog,
    private leagueService: LeagueService
  ) {

  }

  ngOnInit(): void {
    this.loadData(this.page,this.pageSize);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
          tap((event) => this.loadData(event.pageIndex, event.pageSize))
      )
      .subscribe();
  }

  loadData(page: number, pageSize: number) {
    this.leagueService.getLeagues(page, pageSize).subscribe(
      resp => {
        this.leagueList = resp.content;
        this.totalElements = resp.totalElements;
      }
    )
  }

  editLeague(league: League) {
    this.dialog.open(EditLeagueDialogComponent, {
      data: league
    });
  }

  deleteLeague(league: League) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: league
    });

    dialogRef.componentInstance.confirmed.subscribe(() => {
      this.loadData(this.page, this.pageSize);
    });
  }
}
