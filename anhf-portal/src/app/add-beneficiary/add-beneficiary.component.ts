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
  selector: 'app-add-beneficiary',
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
    <h5 mat-dialog-title class="header">Add New Beneficiary</h5>
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
            Add Beneficiary
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./add-beneficiary.component.css'],
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiaryForm: FormGroup;
  groups: Group[] = [];

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private beneficiaryService: BeneficiaryService,
    private dialogRef: MatDialogRef<AddBeneficiaryComponent>
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      group: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  onSubmit() {
    if (this.beneficiaryForm.valid) {
      const formValue = this.beneficiaryForm.value;
      const beneficiary: Beneficiary = {
        ...formValue,
      };
      this.beneficiaryService
        .addBeneficiary(beneficiary)
        .then(() => {
          console.log('Beneficiary added successfully');
          this.dialogRef.close(beneficiary);
        })
        .catch((error) => {
          console.error('Error adding beneficiary: ', error);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
