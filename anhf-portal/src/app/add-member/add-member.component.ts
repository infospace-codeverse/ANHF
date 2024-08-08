import { Component } from '@angular/core';
import { MemberListComponent } from '../member-list/member-list.component';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [MemberListComponent],
  template: ` <app-member-list></app-member-list> `,
  styleUrl: './add-member.component.css',
})
export class AddMemberComponent {}
