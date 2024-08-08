import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ActivityService, Activity } from '../services/activity.service';
import { MembersService, Member } from '../services/members.service';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  template: `
    <h5 mat-dialog-title class="header">Add New Activity</h5>
    <div mat-dialog-content class="form">
      <form [formGroup]="activityForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Description</mat-label>
          <input matInput formControlName="description" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="date" />
          <mat-datepicker-toggle
            matIconSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Attendees</mat-label>
          <mat-select formControlName="attendees" multiple>
            <mat-option
              *ngFor="let member of memberList"
              [value]="member.name"
              >{{ member.name }}</mat-option
            >
          </mat-select>
        </mat-form-field>

        <div mat-dialog-actions class="dialog-footer">
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
          <button mat-button type="submit" [disabled]="activityForm.invalid">
            Add Activity
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./add-activity.component.css'],
})
export class AddActivityComponent implements OnInit {
  activityForm: FormGroup;
  memberList: Member[] = [];

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private membersService: MembersService,
    private dialogRef: MatDialogRef<AddActivityComponent>
  ) {
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      attendees: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.membersService.getMembers().subscribe((members) => {
      this.memberList = members;
    });
  }

  onSubmit() {
    if (this.activityForm.valid) {
      const formValue = this.activityForm.value;
      const activity: Activity = {
        ...formValue,
      };
      this.activityService
        .addActivity(activity)
        .then(() => {
          console.log('Activity added successfully');
          this.dialogRef.close();
        })
        .catch((error) => {
          console.error('Error adding activity: ', error);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
