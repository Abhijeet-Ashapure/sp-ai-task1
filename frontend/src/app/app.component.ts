import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './components/user-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent, MatToolbarModule],
  styles: [
    `
      main {
        justify-content: center;
        padding: 2rem 4rem;
      }
    `,
  ],
  template: `
    <mat-toolbar>
      <span>User Management System</span>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  title = 'client';
}
