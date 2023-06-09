import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamRequest } from 'src/app/models/teamRequest.interface';
import { Team } from 'src/app/models/teamResponse.interface';
import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team-dialog',
  templateUrl: './edit-team-dialog.component.html',
  styleUrls: ['./edit-team-dialog.component.css']
})
export class EditTeamDialogComponent implements OnInit {

  editForm: FormGroup;
  leagueList: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditTeamDialogComponent>,
    private teamService: TeamService,
    private leagueService: LeagueService,
    @Inject(MAT_DIALOG_DATA) public data: Team
  ) {
    this.editForm = this.formBuilder.group({
      teamName: [data.teamName, Validators.required],
      league: [data.league ? data.league.id : null, Validators.required]
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
      console.log(selectedLeagueId)
  
      if (selectedLeagueId === -1) {
        const newLeagueName = this.editForm.get('leagueName')?.value;        
      } else {
        const updatedData: TeamRequest = {
          teamName: this.editForm.get('teamName')?.value,
          idLeague: selectedLeagueId
        };
  
        this.teamService.editTeam(updatedData, this.data.id).subscribe(
          response => {
            console.log(response)
            this.dialogRef.close(response);
          }
        );
      }
    }
  }
  
}