// import { Component } from '@angular/core';
// import { MemberListComponent } from '../member-list/member-list.component';

// @Component({
//   selector: 'app-member',
//   standalone: true,
//   imports: [MemberListComponent],
//   template: ` <app-member-list></app-member-list> `,
//   styleUrl: './member.component.css',
// })
// export class MemberComponent {}


import { Component } from '@angular/core';
import { MemberListComponent } from '../member-list/member-list.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddMemberComponent } from '../add-member/add-member.component';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule, MemberListComponent, MatButtonModule, MatDialogModule],
  template: `
    <div>
      <button mat-button (click)="openAddMemberDialog()">Add Member</button>
      <app-member-list></app-member-list>
    </div>
  `,
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  constructor(private dialog: MatDialog) {}

  openAddMemberDialog(): void {
    const dialogRef = this.dialog.open(AddMemberComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle any actions needed after closing the add member dialog
        console.log('Member added successfully', result);
      }
    });
  }
}
