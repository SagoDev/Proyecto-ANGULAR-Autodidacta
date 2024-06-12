import { Component } from '@angular/core';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserOptionsComponent } from '../user-options/user-options.component';
import { FoldersListComponent } from '../folders-list/folders-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideMenuComponent, NavbarComponent, UserOptionsComponent,FoldersListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
