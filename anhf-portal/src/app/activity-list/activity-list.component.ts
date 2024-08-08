import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
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
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [DatePipe],
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="activities" class="mat-table">
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let activity">{{ activity.name }}</td>
        </ng-container>

        <!-- Description Column -->
        <ng-container matColumnDef="description">
          <th mat-header-cell *matHeaderCellDef>Description</th>
          <td mat-cell *matCellDef="let activity">
            {{ activity.description }}
          </td>
        </ng-container>

        <!-- Date Column -->
        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef>Date</th>
          <td mat-cell *matCellDef="let activity">
            {{ activity.date | date : 'MM/dd/yyyy' }}
          </td>
        </ng-container>

        <!-- Attendees Column -->
        <ng-container matColumnDef="attendees">
          <th mat-header-cell *matHeaderCellDef>Attendees</th>
          <td mat-cell *matCellDef="let activity">
            {{ activity.attendees.join(', ') }}
          </td>
        </ng-container>

        <!-- Edit Column -->
        <ng-container matColumnDef="edit">
          <th mat-header-cell *matHeaderCellDef>Edit</th>
          <td mat-cell *matCellDef="let activity">
            <button mat-button (click)="openEditDialog(activity)">Edit</button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  activities: Activity[] = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'date',
    'attendees',
    'edit',
  ];

  constructor(
    private activityService: ActivityService,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.activityService.getActivities().subscribe((data) => {
      // Transform the timestamp to a Date object if necessary
      this.activities = data.map((activity) => ({
        ...activity,
        date: this.convertToDate(activity.date),
      }));
    });
  }

  private convertToDate(date: any): Date {
    if (date instanceof Date) {
      return date;
    } else if (typeof date === 'object' && 'seconds' in date) {
      return new Date(date.seconds * 1000);
    } else {
      return new Date(date);
    }
  }

  openEditDialog(activity: Activity): void {
    const dialogRef = this.dialog.open(EditActivityComponent, {
      width: '400px',
      data: activity,
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
