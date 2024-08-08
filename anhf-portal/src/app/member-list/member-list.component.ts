import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MembersService, Member } from '../services/members.service';
import { EditMemberComponent } from '../edit-member/edit-member.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginator,
  ],
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="members" class="mat-table">
        <!-- Email Column -->
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef>Email</th>
          <td mat-cell *matCellDef="let member">{{ member.email }}</td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let member">{{ member.name }}</td>
        </ng-container>

        <!-- Phone Number Column -->
        <ng-container matColumnDef="phoneNumber">
          <th mat-header-cell *matHeaderCellDef>Phone Number</th>
          <td mat-cell *matCellDef="let member">{{ member.phoneNumber }}</td>
        </ng-container>

        <!-- Edit Column -->
        <ng-container matColumnDef="edit">
          <th mat-header-cell *matHeaderCellDef>Edit</th>
          <td mat-cell *matCellDef="let member">
            <button mat-button (click)="openEditDialog(member)">Edit</button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
      <mat-paginator
        [pageSizeOptions]="[5, 10, 20]"
        showFirstLastButtons
        aria-label="Select page of periodic elements"
      >
      </mat-paginator>
    </div>
  `,
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  displayedColumns: string[] = ['email', 'name', 'phoneNumber', 'edit'];

  constructor(
    private membersService: MembersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.membersService.getMembers().subscribe((data) => {
      this.members = data;
    });
  }

  openEditDialog(member: Member): void {
    const dialogRef = this.dialog.open(EditMemberComponent, {
      width: '400px',
      data: member,
    });

    dialogRef.afterClosed().subscribe((updatedMember) => {
      if (updatedMember) {
        const index = this.members.findIndex((m) => m.id === updatedMember.id);
        if (index !== -1) {
          this.members[index] = updatedMember;
        }
      }
    });
  }
}
