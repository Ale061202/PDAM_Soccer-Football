import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/models/teamResponse.interface';
import { TeamService } from 'src/app/services/team.service';

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
    private ngxToast: ToastrService,
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
        this.ngxToast.error(`No se ha podido eliminar la propiedad con el id:${this.data.id}`, 'Error');
      });

  }
}
