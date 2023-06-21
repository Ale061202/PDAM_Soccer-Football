import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { League } from 'src/app/models/leagueResponse.interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-create-league-dialog',
  templateUrl: './create-league-dialog.component.html',
  styleUrls: ['./create-league-dialog.component.css']
})
export class CreateLeagueDialogComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateLeagueDialogComponent>,
    private leagueService: LeagueService,
    @Inject(MAT_DIALOG_DATA) public data: League
  ) {
    this.editForm = this.formBuilder.group({
      league_name: ['', Validators.required]
    });    
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      const formValue = this.editForm.value;
      if (formValue) {
        this.leagueService.createLeague(formValue).subscribe(
          (response) => {
            if (this.data) {
              Object.assign(this.data, formValue);
            }
            this.dialogRef.close(formValue);
          }
        );
      }
    }
  }
  
}
