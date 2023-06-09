import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerRequest } from 'src/app/models/playerRequest.interface';
import { Player } from 'src/app/models/playerResponse.interface';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-player-dialog',
  templateUrl: './edit-player-dialog.component.html',
  styleUrls: ['./edit-player-dialog.component.css']
})
export class EditPlayerDialogComponent implements OnInit {

  editForm: FormGroup;
  teamList: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditPlayerDialogComponent>,
    private playerService: PlayerService,
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public data: Player
  ) {
    this.editForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      age: [data.age, Validators.required],
      position: [data.position, Validators.required],
      height: [data.height, Validators.required],
      weight: [data.weight, Validators.required],
      jerseyNumber: [data.jerseyNumber, Validators.required],
      country: [data.country, Validators.required],
      team: [data.team ? data.team.id : null, Validators.required]
    });    
  }

  ngOnInit(): void {
    this.teamService.getTeams(0,5000).subscribe(
      resp => {
        this.teamList = resp.content
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      const selectedTeamId = this.editForm.get('team')?.value;
      console.log(selectedTeamId)
  
      if (selectedTeamId === -1) {
        const newTeamName = this.editForm.get('teamName')?.value;        
      } else {
        const updatedData: PlayerRequest = {
          name: this.editForm.get('name')?.value,
          idTeam: selectedTeamId,
          age: this.editForm.get('age')?.value,
          height: this.editForm.get('height')?.value,
          weight: this.editForm.get('weight')?.value,
          jerseyNumber: this.editForm.get('jerseyNumber')?.value,
          country: this.editForm.get('country')?.value,
          position: this.editForm.get('position')?.value,
        };
  
        this.playerService.editPlayer(updatedData, this.data.id).subscribe(
          response => {
            console.log(response)
            this.dialogRef.close(response);
          }
        );
      }
    }
  }
}

