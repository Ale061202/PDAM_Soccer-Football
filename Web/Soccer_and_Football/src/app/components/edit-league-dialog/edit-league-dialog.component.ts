import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { League } from 'src/app/models/leagueResponse.interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-edit-league-dialog',
  templateUrl: './edit-league-dialog.component.html',
  styleUrls: ['./edit-league-dialog.component.css']
})
export class EditLeagueDialogComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditLeagueDialogComponent>,
    private leagueService: LeagueService,
    @Inject(MAT_DIALOG_DATA) public data: League
  ) {
    this.editForm = this.formBuilder.group({
      league_name: [data.league_name, Validators.required]
    });    
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.leagueService.editLeague(this.editForm.value, this.data.id)
        .subscribe(
          (response) => {
            Object.assign(this.data, this.editForm.value);
            this.dialogRef.close(this.editForm.value);
          }
        );
    }
  }
}
