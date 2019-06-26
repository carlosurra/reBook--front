import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DirectoryComponent } from 'src/app/features/users/directory/directory.component';

const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  }
];
@NgModule({
  declarations: [
    DirectoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class UsersModule { }
