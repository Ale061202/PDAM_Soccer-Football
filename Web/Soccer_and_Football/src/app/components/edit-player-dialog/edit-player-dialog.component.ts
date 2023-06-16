import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Player } from 'src/app/models/playerResponse.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player-dialog',
  templateUrl: './edit-player-dialog.component.html',
  styleUrls: ['./edit-player-dialog.component.css']
})
export class EditPlayerDialogComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditPlayerDialogComponent>,
    private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: Player
  ) {
    this.editForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      age: [data.age, Validators.required],
      position: [data.position, Validators.required],
      height: [data.height, Validators.required],
      weight: [data.weight, Validators.required],
      jerseyNumber: [data.jerseyNumber, Validators.required]
    });    
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.playerService.editPlayer(this.editForm.value, this.data.id)
        .subscribe(
          (response) => {
            Object.assign(this.data, this.editForm.value);
            this.dialogRef.close(this.editForm.value);
          }
        );
    }
  }
}

