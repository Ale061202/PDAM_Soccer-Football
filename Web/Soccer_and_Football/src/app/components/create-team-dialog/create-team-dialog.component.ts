import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamRequest } from 'src/app/models/teamRequest.interface';
import { Team } from 'src/app/models/teamResponse.interface';
import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-create-team-dialog',
  templateUrl: './create-team-dialog.component.html',
  styleUrls: ['./create-team-dialog.component.css']
})
export class CreateTeamDialogComponent implements OnInit {
  editForm: FormGroup;
  leagueList: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateTeamDialogComponent>,
    private teamService: TeamService,
    private leagueService: LeagueService,
    @Inject(MAT_DIALOG_DATA) public data: Team
  ) {
    this.editForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      league: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.leagueService.getLeagues(0, 5000).subscribe(
      resp => {
        this.leagueList = resp.content;
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      const selectedLeagueId = this.editForm.get('league')?.value;
  
      if (selectedLeagueId === -1) {
        const newTeamName = this.editForm.get('teamName')?.value;
        const newLeagueName = this.editForm.get('leagueName')?.value;
        } else {
        const updatedData: TeamRequest = {
          teamName: this.editForm.get('teamName')?.value,
          idLeague: selectedLeagueId
        };
  
        this.teamService.createTeam(updatedData).subscribe(
          response => {
            // Cerrar el diálogo con la respuesta del nuevo equipo
            this.dialogRef.close(response);
          }
        );
      }
    }
  }
  
  
}
