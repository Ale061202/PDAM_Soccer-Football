import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { CreatePlayerDialogComponent } from 'src/app/components/create-player-dialog/create-player-dialog.component';
import { DeletePlayerDialogComponent } from 'src/app/components/delete-player-dialog/delete-player-dialog.component';
import { EditPlayerDialogComponent } from 'src/app/components/edit-player-dialog/edit-player-dialog.component';
import { Player } from 'src/app/models/playerResponse.interface';
import { PlayerService } from 'src/app/services/player.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  page = 0;
  pageSize = 5;
  totalElements = 0;
  playerList: Player [] = [];

  constructor(
    private utilsService: UtilService,
    private dialog: MatDialog,
    private playerService: PlayerService
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
    this.playerService.getPlayers(page, pageSize).subscribe(
      resp => {
        this.playerList = resp.content;
        this.totalElements = resp.totalElements;
      }
    )
  }

  editPlayer(player: Player) {
    this.dialog.open(EditPlayerDialogComponent, {
      data: player
    });
  }

  deletePlayer(player: Player) {
    const dialogRef = this.dialog.open(DeletePlayerDialogComponent, {
      data: player
    });

    dialogRef.componentInstance.confirmed.subscribe(() => {
      this.loadData(this.page, this.pageSize);
    });
  }

  createPlayer() {
    const dialogRef = this.dialog.open(CreatePlayerDialogComponent, {});
      dialogRef.afterClosed().subscribe(() => {
        this.paginator.pageIndex = 0;
        this.loadData(this.paginator.pageIndex, this.paginator.pageSize);
      });
  }

}
