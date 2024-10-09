import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/user-list.component';
import { AddUserComponent } from './components/add-user.component';

export const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'new', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
