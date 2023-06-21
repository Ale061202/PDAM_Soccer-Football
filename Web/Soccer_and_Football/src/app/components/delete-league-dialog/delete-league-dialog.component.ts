import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { League } from 'src/app/models/leagueResponse.interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-delete-league-dialog',
  templateUrl: './delete-league-dialog.component.html',
  styleUrls: ['./delete-league-dialog.component.css']
})
export class DeleteLeagueDialogComponent implements OnInit {
  @Output() confirmed = new EventEmitter<void>();

  constructor(
    private dialogRef: MatDialogRef<DeleteLeagueDialogComponent>,
    private leagueService: LeagueService,
    private ngxToast: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: League
  ) { }


  ngOnInit(): void {}


  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.leagueService.deleteLeague(this.data.id).subscribe(() => {
        this.dialogRef.close();
        this.confirmed.emit();
      }, error => {
        this.ngxToast.error(`No se ha podido eliminar la propiedad con el id:${this.data.id}`, 'Error');
      });

  }
}
