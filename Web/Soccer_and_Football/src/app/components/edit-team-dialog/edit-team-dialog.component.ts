import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from 'src/app/models/teamResponse.interface';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team-dialog',
  templateUrl: './edit-team-dialog.component.html',
  styleUrls: ['./edit-team-dialog.component.css']
})
export class EditTeamDialogComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditTeamDialogComponent>,
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public data: Team
  ) {
    this.editForm = this.formBuilder.group({
      teamName: [data.teamName, Validators.required]
    });    
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.teamService.editTeam(this.editForm.value, this.data.id)
        .subscribe(
          (response) => {
            Object.assign(this.data, this.editForm.value);
            this.dialogRef.close(this.editForm.value);
          }
        );
    }
  }
}
