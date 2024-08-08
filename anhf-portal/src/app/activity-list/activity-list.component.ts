import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ActivityService, Activity } from '../services/activity.service';
import { EditActivityComponent } from '../edit-activity/edit-activity.component';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  template: `
    <div class="activity-list">
      <mat-card *ngFor="let activity of activities" class="activity-card">
        <mat-card-header>
          <mat-card-title>{{ activity.name }}</mat-card-title>
          <mat-card-subtitle>{{
            activity.date | date : 'MM/dd/yyyy'
          }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{ activity.description }}</p>
          <p><strong>Attendees:</strong></p>
          <ul class="attendee-list">
            <li *ngFor="let attendee of activity.attendees">{{ attendee }}</li>
          </ul>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="openEditDialog(activity)">Edit</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  activities: Activity[] = [];

  constructor(
    private activityService: ActivityService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activityService.getActivities().subscribe((data) => {
      this.activities = data.map((activity) => ({
        ...activity,
        date: this.convertToDate(activity.date),
      }));
    });
  }

  private convertToDate(date: any): Date | string {
    if (date instanceof Date) {
      return date;
    } else if (
      date &&
      typeof date === 'object' &&
      'seconds' in date &&
      'nanoseconds' in date
    ) {
      return new Date(date.seconds * 1000);
    } else if (typeof date === 'string') {
      return new Date(date);
    } else {
      return date;
    }
  }

  openEditDialog(activity: Activity): void {
    const dialogRef = this.dialog.open(EditActivityComponent, {
      width: '400px',
      data: { ...activity, date: this.convertToDate(activity.date) },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.activities = this.activities.map((act) =>
          act.id === result.id ? result : act
        );
      }
    });
  }
}
