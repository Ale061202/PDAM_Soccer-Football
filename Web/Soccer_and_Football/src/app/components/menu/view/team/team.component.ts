import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/components/delete-team-dialog/delete-dialog.component';
import { EditTeamDialogComponent } from 'src/app/components/edit-team-dialog/edit-team-dialog.component';
import { Team } from 'src/app/models/teamResponse.interface';
import { TeamService } from 'src/app/services/team.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  page = 0;
  pageSize = 5;
  totalElements = 0;
  teamList: Team [] = [];

  constructor(
    private teamService: TeamService,
    private _utilService: UtilService,
    private dialog: MatDialog,
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
    this.teamService.getTeams(page, pageSize).subscribe(
      resp => {
        this.teamList = resp.content;
        this.totalElements = resp.totalElements;
      }
    )
  }

  editTeam(team: Team) {
    this.dialog.open(EditTeamDialogComponent, {
      data: team
    });
  }

  deleteTeam(team: Team) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: team
    });

    dialogRef.componentInstance.confirmed.subscribe(() => {
      this.loadData(this.page, this.pageSize);
    });
  }
}
