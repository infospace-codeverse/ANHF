import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { GroupsService, Group } from '../services/groups.service';
import { BeneficiaryService, Beneficiary } from '../services/beneficiary.service';

@Component({
  selector: 'app-edit-beneficiary',
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
    <h5 mat-dialog-title class="header">Edit Beneficiary</h5>
    <div mat-dialog-content class="form">
      <form [formGroup]="beneficiaryForm" (ngSubmit)="onSubmit()">
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

        <mat-form-field appearance="outline">
          <mat-label>Group</mat-label>
          <mat-select formControlName="group">
            <mat-option *ngFor="let group of groups" [value]="group.name">
              {{ group.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Amount</mat-label>
          <input matInput formControlName="amount" />
        </mat-form-field>

        <div mat-dialog-actions class="dialog-footer">
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
          <button mat-button type="submit" [disabled]="beneficiaryForm.invalid">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./edit-beneficiary.component.css'],
})
export class EditBeneficiaryComponent implements OnInit {
  beneficiaryForm: FormGroup;
  groups: Group[] = [];

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private beneficiaryService: BeneficiaryService,
    private dialogRef: MatDialogRef<EditBeneficiaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Beneficiary
  ) {
    this.beneficiaryForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phoneNumber: [data.phoneNumber, Validators.required],
      group: [data.groupId, Validators.required],
      amount: [data.amount, Validators.required],
    });
  }

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  onSubmit() {
    if (this.beneficiaryForm.valid) {
      const updatedBeneficiary: Beneficiary = {
        ...this.data,
        ...this.beneficiaryForm.value,
      };
      this.beneficiaryService.updateBeneficiary(updatedBeneficiary).then(() => {
        console.log('Beneficiary updated successfully');
        this.dialogRef.close(updatedBeneficiary);
      }).catch(error => {
        console.error('Error updating beneficiary: ', error);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
