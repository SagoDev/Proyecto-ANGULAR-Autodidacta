import { Component, ElementRef, inject, Signal, viewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public registerPath = '/auth/register';
  
  public authService = inject(AuthService);
  public router = inject(Router);

  public inputUsername: Signal<ElementRef | undefined> = viewChild('usernameInput');
  public inputPassword: Signal<ElementRef | undefined> = viewChild('passInput');

  login() {
    const username = this.inputUsername()?.nativeElement.value || '';
    const password = this.inputPassword()?.nativeElement.value || '';

    const validUser = this.authService.getUser(username, password);
    if (validUser) {
      this.router.navigate(['/private/dashboard']);
    }else{
      alert('Datos no válidos')
    }
  }
}
