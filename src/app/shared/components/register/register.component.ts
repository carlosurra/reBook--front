import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPassValidator } from '../../validators/matchpass.validator';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { Router } from '@angular/router';
import { MailValidator } from '../../validators/mail.validator';



@Component({
  selector: 'rb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
          name: ['', [Validators.minLength(2)]],
          email: ['', [Validators.required, MailValidator]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]],
      },
      { validators: MatchPassValidator }
  );


 constructor(
     private fb: FormBuilder,
     private router: Router,
     private authService: AuthService,
     private modalService: ModalService
 ) {}

 register() {
     const { 
         name,
         email, 
         password 
        } = this.registerForm.value;

     if (this.registerForm.valid) {
         this.authService
         .register({ 
             name, 
             email, 
             password })
             .subscribe(() => {
             this.registerForm.reset();
             this.modalService.open(
                 "It's almost done!",
                 "Check your email and follow the activation instructions!");
            this.router.navigate(['/home']);
         });
     }
 }
}
