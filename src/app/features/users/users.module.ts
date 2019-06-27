import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DirectoryComponent } from 'src/app/features/users/directory/directory.component';
import { UsersFooterComponent } from './users-footer/users-footer.component';
import { UsersComponent } from './users/users.component';
import { UsersHeaderComponent } from './users-header/users-header.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];
@NgModule({
  declarations: [
    DirectoryComponent,
    UsersFooterComponent,
    UsersComponent,
    UsersHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class UsersModule { }
