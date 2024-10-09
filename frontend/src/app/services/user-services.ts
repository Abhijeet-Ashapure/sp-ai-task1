import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'http://localhost:5134/api/User';
  users$: WritableSignal<User[]> = signal<User[]>([]);

  constructor(private http: HttpClient) {}

  getUsers(): void {
    this.http.get<User[]>(this.usersUrl).subscribe({
        next: (users) => {
            this.users$.set(users);
        },
        error: (err) => {
            console.error('Error fetching users:', err);
        },
    });
}


  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }
}
