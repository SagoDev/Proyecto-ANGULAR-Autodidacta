import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  public registerPath = '/auth/register';
  public loginPath = '/auth/login';
}
