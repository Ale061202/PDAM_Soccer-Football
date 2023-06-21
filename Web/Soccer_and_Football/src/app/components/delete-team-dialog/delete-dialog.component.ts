import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/models/teamResponse.interface';
import { TeamService } from 'src/app/services/team.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  @Output() confirmed = new EventEmitter<void>();

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private teamService: TeamService,
    private _utilService: UtilService,
    @Inject(MAT_DIALOG_DATA) public data: Team
  ) { }


  ngOnInit(): void {}


  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.teamService.deleteTeam(this.data.id)
      .subscribe(() => {
        this.dialogRef.close();
        this.confirmed.emit();
      }, error => {
        this._utilService.showAlert("No puedes borrar esta liga ya que tiene equipos en ella", "Vaya!!!")
      });

  }
}
