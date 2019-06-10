import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValMessagesComponent } from './components/val-messages/val-messages.component';
import { MarkAsTouchedDirective } from './directives/marktouched.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ValMessagesComponent,
    MarkAsTouchedDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    ValMessagesComponent,
    MarkAsTouchedDirective,
  ]
})
export class SharedModule { }
