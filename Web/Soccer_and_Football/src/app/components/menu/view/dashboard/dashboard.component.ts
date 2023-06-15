import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsResponse } from 'src/app/models/userDetailsResponse.interface';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: UserDetailsResponse | null = null;

  constructor( private dialog: MatDialog, private _utilService: UtilService) { }
    
    ngOnInit(): void {
      this.user = this._utilService.getUserSession();
    }
    
}
