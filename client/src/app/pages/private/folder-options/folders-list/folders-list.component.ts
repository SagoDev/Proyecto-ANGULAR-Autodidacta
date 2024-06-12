import { Component, inject, } from '@angular/core';
import { FoldersService } from '../../../../core/services/folders.service';

@Component({
  selector: 'app-folders-list',
  standalone: true,
  imports: [],
  templateUrl: './folders-list.component.html',
  styleUrl: './folders-list.component.scss'
})
export class FoldersListComponent {
  public folderService = inject(FoldersService);
}
