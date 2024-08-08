import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddActivityComponent } from '../add-activity/add-activity.component';
import { ActivityListComponent } from '../activity-list/activity-list.component';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ActivityListComponent],
  template: `
    <h1>Activities</h1>
    <button mat-button (click)="openDialog()">New activity</button>
    <app-activity-list></app-activity-list>
  `,
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddActivityComponent, {
      width: '400px',
    });
  }
}
