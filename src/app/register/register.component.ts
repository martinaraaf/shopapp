import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', Validators.required],
    }, { validators: passwordMatcher });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Perform registration logic here
      console.log('Registration successful!', this.registerForm.value);
    }
  }
}
function passwordMatcher(c: AbstractControl): ValidationErrors | null {
  const passwordControl = c.get('password');
  const confirmPasswordControl = c.get('confirmPassword');

  if (passwordControl?.value !== confirmPasswordControl?.value) {
    return { passwordMismatch: true };
  }

  return null;
}
