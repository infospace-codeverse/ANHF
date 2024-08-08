import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  BeneficiaryService,
  Beneficiary,
} from '../services/beneficiary.service';
import { EditBeneficiaryComponent } from '../edit-beneficiary/edit-beneficiary.component';

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="beneficiaries" class="mat-table">
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let beneficiary">{{ beneficiary.name }}</td>
        </ng-container>

        <!-- Group Column -->
        <ng-container matColumnDef="group">
          <th mat-header-cell *matHeaderCellDef>Group</th>
          <td mat-cell *matCellDef="let beneficiary">
            {{ beneficiary.group }}
          </td>
        </ng-container>

        <!-- Amount Column -->
        <ng-container matColumnDef="amount">
          <th mat-header-cell *matHeaderCellDef>Amount</th>
          <td mat-cell *matCellDef="let beneficiary">
            KSH {{ beneficiary.amount }}
          </td>
        </ng-container>

        <!-- Edit Column -->
        <ng-container matColumnDef="edit">
          <th mat-header-cell *matHeaderCellDef>Edit</th>
          <td mat-cell *matCellDef="let beneficiary">
            <button mat-button (click)="openEditDialog(beneficiary)">
              Edit
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styleUrls: ['./beneficiary-list.component.css'],
})
export class BeneficiaryListComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  displayedColumns: string[] = ['name', 'amount', 'edit'];

  constructor(
    private beneficiaryService: BeneficiaryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.beneficiaryService.getBeneficiaries().subscribe((data) => {
      this.beneficiaries = data;
    });
  }

  openEditDialog(beneficiary: Beneficiary): void {
    const dialogRef = this.dialog.open(EditBeneficiaryComponent, {
      width: '400px',
      data: beneficiary,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.beneficiaries = this.beneficiaries.map((b) =>
          b.id === result.id ? result : b
        );
      }
    });
  }
}
