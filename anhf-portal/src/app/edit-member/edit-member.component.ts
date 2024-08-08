import { Component, OnInit, Inject } from '@angular/core';
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
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MembersService, Member } from '../services/members.service';

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h5 mat-dialog-title class="header">Edit Member</h5>
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./edit-member.component.css'],
})
export class EditMemberComponent implements OnInit {
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private membersService: MembersService,
    private dialogRef: MatDialogRef<EditMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member
  ) {
    this.memberForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phoneNumber: [data.phoneNumber, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.memberForm.valid) {
      const updatedMember: Member = {
        ...this.data,
        ...this.memberForm.value,
      };
      this.membersService.updateMember(updatedMember).then(() => {
        console.log('Member updated successfully');
        this.dialogRef.close(updatedMember);
      }).catch(error => {
        console.error('Error updating member: ', error);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
