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
import { MatSelectModule } from '@angular/material/select';
import { GroupsService, Group } from '../services/groups.service';
import {
  BeneficiaryService,
  Beneficiary,
} from '../services/beneficiary.service';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  template: `
    <h5 mat-dialog-title class="header">Add New Group</h5>
    <div mat-dialog-content class="form">
      <form [formGroup]="groupForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Leader</mat-label>
          <mat-select formControlName="leader">
            <mat-option
              *ngFor="let beneficiary of beneficiaries"
              [value]="beneficiary.name"
            >
              {{ beneficiary.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Members</mat-label>
          <mat-select formControlName="members" multiple>
            <mat-option
              *ngFor="let beneficiary of beneficiaries"
              [value]="beneficiary.name"
            >
              {{ beneficiary.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <div mat-dialog-actions class="dialog-footer">
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
          <button mat-button type="submit" [disabled]="groupForm.invalid">
            Add Group
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./add-group.component.css'],
})
export class AddGroupComponent implements OnInit {
  groupForm: FormGroup;
  beneficiaries: Beneficiary[] = [];

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private beneficiaryService: BeneficiaryService,
    private dialogRef: MatDialogRef<AddGroupComponent>
  ) {
    this.groupForm = this.fb.group({
      name: ['', Validators.required],
      leader: ['', Validators.required],
      members: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.beneficiaryService.getBeneficiaries().subscribe((data) => {
      this.beneficiaries = data;
    });
  }

  onSubmit() {
    if (this.groupForm.valid) {
      const formValue = this.groupForm.value;
      const newGroup: Group = {
        ...formValue,
        members: formValue.members,
      };
      this.groupsService
        .addGroup(newGroup)
        .then((docRef) => {
          const groupId = docRef.id;
          if (groupId) {
            // Ensure groupId is defined
            // Update beneficiaries with the groupId
            const memberUpdates = formValue.members.map(
              (memberName: string) => {
                const beneficiary = this.beneficiaries.find(
                  (b) => b.name === memberName
                );
                if (beneficiary) {
                  beneficiary.groupId = groupId;
                  return this.beneficiaryService.updateBeneficiary(beneficiary);
                }
                return Promise.resolve();
              }
            );

            Promise.all(memberUpdates)
              .then(() => {
                console.log('Group and beneficiaries updated successfully');
                this.dialogRef.close(newGroup);
              })
              .catch((error) => {
                console.error('Error updating beneficiaries: ', error);
              });
          } else {
            console.error('Group ID is undefined');
          }
        })
        .catch((error) => {
          console.error('Error adding group: ', error);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
