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
import { MatSelectModule } from '@angular/material/select';
import { GroupsService, Group } from '../services/groups.service';
import {
  BeneficiaryService,
  Beneficiary,
} from '../services/beneficiary.service';

@Component({
  selector: 'app-edit-group',
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
    <h5 mat-dialog-title class="header">Edit Group</h5>
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./edit-group.component.css'],
})
export class EditGroupComponent implements OnInit {
  groupForm: FormGroup;
  beneficiaries: Beneficiary[] = [];

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private beneficiaryService: BeneficiaryService,
    private dialogRef: MatDialogRef<EditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Group
  ) {
    this.groupForm = this.fb.group({
      name: [data.name, Validators.required],
      leader: [data.leader, Validators.required],
      members: [data.members, Validators.required],
    });
  }

  ngOnInit(): void {
    this.beneficiaryService.getBeneficiaries().subscribe((data) => {
      this.beneficiaries = data;
    });
  }

  onSubmit() {
    if (this.groupForm.valid) {
      const updatedGroup: Group = {
        ...this.data,
        ...this.groupForm.value,
        members: this.groupForm.value.members,
      };
      this.groupsService
        .updateGroup(updatedGroup)
        .then(() => {
          const groupId = updatedGroup.id;
          if (groupId) {
            const memberUpdates = this.groupForm.value.members.map(
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
                this.dialogRef.close(updatedGroup);
              })
              .catch((error) => {
                console.error('Error updating beneficiaries: ', error);
              });
          } else {
            console.error('Group ID is undefined');
          }
        })
        .catch((error) => {
          console.error('Error updating group: ', error);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
