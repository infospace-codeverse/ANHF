import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [SideNavComponent],
  template: ` <app-side-nav></app-side-nav> `,
  styleUrl: './portal.component.css',
})
export class PortalComponent {}
