import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Login successful!', this.user);
    }
  }

}
