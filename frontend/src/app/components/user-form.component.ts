import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../users';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  styles: `
    .user-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
    }
    .mat-mdc-radio-button ~ .mat-mdc-radio-button {
      margin-left: 16px;
    }
    .mat-mdc-form-field {
      width: 100%;
    }
  `,
  template: `
    <form
      class="user-form"
      autocomplete="off"
      [formGroup]="userForm"
      (submit)="submitForm()"
    >
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Name" formControlName="name" required />
        <mat-error ngIf="name.invalid">Name must be at least 3 characters long.</mat-error>
      </mat-form-field>

      <mat-form-field>
        <mat-label>Email</mat-label>
        <input
          matInput
          type="email"
          placeholder="Email"
          formControlName="email"
          required
        />
        <mat-error ngIf="email.errors?.required">Email is required.</mat-error>
      </mat-form-field>

      <mat-radio-group formControlName="role" aria-label="Select an option">
        <mat-radio-button name="role" value="user" required>User</mat-radio-button>
        <mat-radio-button name="role" value="admin">Admin</mat-radio-button>
      </mat-radio-group>
      <br />
      <button
        mat-raised-button
        color="primary"
        type="submit"
        [disabled]="userForm.invalid"
      >
        Add
      </button>
    </form>
  `,
})
export class UserFormComponent {
  @Input() initialState: User | null = null; // Use @Input decorator properly

  @Output() formValuesChanged = new EventEmitter<User>();
  @Output() formSubmitted = new EventEmitter<User>();

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]], // Added Validators.email
    role: ['user', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {
    effect(() => {
      if (this.initialState) {
        this.userForm.setValue({
          name: this.initialState.name || '',
          email: this.initialState.email || '',
          role: this.initialState.role || 'user',
        });
      }
    });
  }

  get name() {
    return this.userForm.get('name')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get role() {
    return this.userForm.get('role')!;  
  }

  submitForm() {
    if (this.userForm.valid) {
      this.formSubmitted.emit(this.userForm.value as User);
    }
  }
}
