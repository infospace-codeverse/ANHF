import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { GroupsService, Group } from '../services/groups.service';
import { BeneficiaryService, Beneficiary } from '../services/beneficiary.service';
import { EditGroupComponent } from '../edit-group/edit-group.component';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  template: `
    <div class="group-list">
      <mat-card *ngFor="let group of groups" class="group-card">
        <mat-card-header>
          <mat-card-title>{{ group.name }}</mat-card-title>
          <mat-card-subtitle>Leader: {{ group.leader }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p><strong>Members:</strong></p>
          <ol class="member-list">
            <li *ngFor="let member of getGroupMembers(group.id)">
              {{ member.name }}
            </li>
          </ol>
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-button
            (click)="openEditDialog(group)"
            [disabled]="isCurrentBeneficiaryInGroup(group)"
          >
            Edit
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  beneficiaries: Beneficiary[] = [];
  currentBeneficiary: Beneficiary | null = null;

  constructor(
    private groupsService: GroupsService,
    private beneficiaryService: BeneficiaryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data) => {
      this.groups = data;
    });

    this.beneficiaryService.getBeneficiaries().subscribe((data) => {
      this.beneficiaries = data;
      // Replace this with the actual logic to get the current logged-in beneficiary
      this.currentBeneficiary =
        this.beneficiaries.find(
          (b) => b.email === 'current.user@example.com'
        ) || null;
    });
  }

  openEditDialog(group: Group): void {
    if (group.id) { // Ensure group.id is defined before passing it
      const dialogRef = this.dialog.open(EditGroupComponent, {
        width: '400px',
        data: group,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.groups = this.groups.map((g) => (g.id === result.id ? result : g));
        }
      });
    } else {
      console.error('Group ID is undefined');
    }
  }

  isCurrentBeneficiaryInGroup(group: Group): boolean {
    if (!this.currentBeneficiary) {
      return false;
    }
    return group.members.includes(this.currentBeneficiary.name);
  }

  getGroupMembers(groupId: string | undefined): Beneficiary[] {
    if (!groupId) {
      return [];
    }
    return this.beneficiaries.filter((b) => b.groupId === groupId);
  }
}
