import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormComponent } from './user-form.component';
import { User } from '../users';
import { UserService } from '../services/user-services';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [UserFormComponent, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Add a New User</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-user-form
          (formSubmitted)="addUser($event)"
        ></app-user-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class AddUserComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  addUser(user: User) {
    this.userService.createUser(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Failed to create user');
        console.error(error);
      },
    });
    this.userService.getUsers();
  }
}
