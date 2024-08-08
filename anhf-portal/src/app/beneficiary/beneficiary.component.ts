import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddBeneficiaryComponent } from '../add-beneficiary/add-beneficiary.component';
import { BeneficiaryListComponent } from '../beneficiary-list/beneficiary-list.component';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, BeneficiaryListComponent],
  template: `
    <div>
      <button mat-button (click)="openAddBeneficiaryDialog()">Add Beneficiary</button>
      <app-beneficiary-list></app-beneficiary-list>
    </div>
  `,
  styleUrls: ['./beneficiary.component.css'],
})
export class BeneficiaryComponent {
  constructor(private dialog: MatDialog) {}

  openAddBeneficiaryDialog(): void {
    const dialogRef = this.dialog.open(AddBeneficiaryComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle any actions needed after closing the add beneficiary dialog
        console.log('Beneficiary added successfully', result);
      }
    });
  }
}
