import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GroupListComponent } from '../group-list/group-list.component';
import { AddGroupComponent } from '../add-group/add-group.component';
import { GroupsService, Group } from '../services/groups.service';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, GroupListComponent],
  template: `
    <div class="header">
      <h5>Beneficiary Group</h5>
      <button mat-button (click)="openDialog()">New Group</button>
    </div>
    <app-group-list></app-group-list>
    <div *ngIf="selectedGroup">
      <h5>Members of {{ selectedGroup.name }}</h5>
      <ul>
        <li *ngFor="let member of selectedGroup?.members">{{ member }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  selectedGroup: Group | null = null;
  groups: Group[] = [];

  constructor(public dialog: MatDialog, private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle any actions needed after closing the add group dialog
        console.log('Group added successfully', result);
      }
    });
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
  }
}
