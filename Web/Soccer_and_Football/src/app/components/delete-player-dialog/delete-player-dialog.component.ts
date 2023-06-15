import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Player } from 'src/app/models/playerResponse.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-delete-player-dialog',
  templateUrl: './delete-player-dialog.component.html',
  styleUrls: ['./delete-player-dialog.component.css']
})
export class DeletePlayerDialogComponent implements OnInit {
  
  @Output() confirmed = new EventEmitter<void>();

  constructor(
    private dialogRef: MatDialogRef<DeletePlayerDialogComponent>,
    private playerService: PlayerService,
    private ngxToast: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Player
  ) { }


  ngOnInit(): void {}


  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.playerService.deletePlayer(this.data.id)
      .subscribe(() => {
        this.dialogRef.close();
        this.confirmed.emit();
      }, error => {
        this.ngxToast.error(`No se ha podido eliminar la propiedad con el id:${this.data.id}`, 'Error');
      });

  }
}
