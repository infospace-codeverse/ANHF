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
import { MembersService, Member } from '../services/members.service';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h5 mat-dialog-title class="header">Add New Member</h5>
    <div mat-dialog-content class="form">
      <form [formGroup]="memberForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Phone Number</mat-label>
          <input matInput formControlName="phoneNumber" />
        </mat-form-field>

        <div mat-dialog-actions class="dialog-footer">
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
          <button mat-button type="submit" [disabled]="memberForm.invalid">
            Add Member
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./add-member.component.css'],
})
export class AddMemberComponent implements OnInit {
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private membersService: MembersService,
    private dialogRef: MatDialogRef<AddMemberComponent>
  ) {
    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.memberForm.valid) {
      const formValue = this.memberForm.value;
      const member: Member = {
        ...formValue,
      };
      this.membersService
        .addMember(member)
        .then(() => {
          console.log('Member added successfully');
          this.dialogRef.close();
        })
        .catch((error) => {
          console.error('Error adding member: ', error);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
