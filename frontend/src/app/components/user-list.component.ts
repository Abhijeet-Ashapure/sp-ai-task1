import { Component, OnInit, WritableSignal } from '@angular/core';
import { UserService } from '../services/user-services';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../users';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
  styles: [
    `
      table {
        width: 100%;
        button:first-of-type {
          margin-right: 1rem;
        }
      }

      .card-actions {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
  template: `
    <mat-card>
      <mat-card-header class="card-actions">
        <mat-card-title>Users List</mat-card-title>
        <mat-card-actions>
        <button mat-raised-button color="primary" [routerLink]="['new']">
          Add a New User
        </button>
      </mat-card-actions>
      </mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="users$()">
          <ng-container matColumnDef="col-name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let element">{{ element.name }}</td>
          </ng-container>
          <ng-container matColumnDef="col-email">
            <th mat-header-cell *matHeaderCellDef>Email</th>
            <td mat-cell *matCellDef="let element">{{ element.email }}</td>
          </ng-container>
          <ng-container matColumnDef="col-role">
            <th mat-header-cell *matHeaderCellDef>Role</th>
            <td mat-cell *matCellDef="let element">{{ element.role }}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `,
})
export class UsersListComponent implements OnInit {
  users$ = {} as WritableSignal<User[]>;
  displayedColumns: string[] = ['col-name', 'col-email', 'col-role'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
    this.users$ = this.userService.users$;
  }
}
