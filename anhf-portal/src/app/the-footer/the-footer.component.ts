import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-the-footer',
  standalone: true,
  imports: [MatGridListModule],
  template: `
    <mat-grid-list cols="5" rowHeight="2:1">
  
    <mat-grid-list cols="5" rowHeight="5:1">
      <mat-grid-tile></mat-grid-tile>
      <mat-grid-tile>© 2024 Alfayo Nelson Hope Foundation</mat-grid-tile>
      <mat-grid-tile></mat-grid-tile>
      <mat-grid-tile>Terms & Conditions </mat-grid-tile>
    </mat-grid-list>
  `,
  styleUrl: './the-footer.component.css',
})
export class TheFooterComponent {}
