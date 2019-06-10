import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPassValidator } from '../../validators/matchpass.validator';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalService } from 'src/app/core/services/modal.service';




@Component({
  selector: 'rb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group(
      {
          fullName: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]],
      },
      { validators: MatchPassValidator }
  );


 constructor(
     private fb: FormBuilder,
     private authService: AuthService,
     private modalService: ModalService
 ) {}

 register() {
     const { fullName, email, password } = this.registerForm.value;

     if (this.registerForm.valid) {
         this.authService.register({ fullName, email, password }).subscribe(() => {
             this.registerForm.reset();
             this.modalService.open(
                 "It's almost done!",
                 "Check your email and follow the activation instructions!"
             );
         });
     }
 }
}
