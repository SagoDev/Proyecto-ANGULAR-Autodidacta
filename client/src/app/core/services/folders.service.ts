import { Injectable } from '@angular/core';
import { Folder, Link } from '../interfaces/folder.interface';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  private folders: Folder[] = [{
    id: '1',
    name: 'Angular 17',
    links: [
      {
        id: '1',
        title: 'De observable a Señal',
        url: 'https://www.youtube.com/watch?v=kCATxUtogrY'
      },
      {
        id: '2',
        title: 'Required | @Input',
        url: 'https://www.youtube.com/watch?v=G9bghx5CBYw&t=9s'
      },
      {
        id: '3',
        title: 'Defer Blocks',
        url: 'https://www.youtube.com/watch?v=633SsJjnjkQ'
      }
    ]
  },
  {
    id: '2',
    name: 'React',
    links: [
      {
        id: '1',
        title: 'De observable a Señal',
        url: 'https://www.youtube.com/watch?v=kCATxUtogrY'
      },
      {
        id: '2',
        title: 'Required | @Input',
        url: 'https://www.youtube.com/watch?v=G9bghx5CBYw&t=9s'
      },
      {
        id: '3',
        title: 'Defer Blocks',
        url: 'https://www.youtube.com/watch?v=633SsJjnjkQ'
      }
    ]
  },
  {
    id: '3',
    name: 'Mongo DB',
    links: [
      {
        id: '1',
        title: 'De observable a Señal',
        url: 'https://www.youtube.com/watch?v=kCATxUtogrY'
      },
      {
        id: '2',
        title: 'Required | @Input',
        url: 'https://www.youtube.com/watch?v=G9bghx5CBYw&t=9s'
      },
      {
        id: '3',
        title: 'Defer Blocks',
        url: 'https://www.youtube.com/watch?v=633SsJjnjkQ'
      }
    ]
  },
  {
    id: '4',
    name: 'Javascript',
    links: [
      {
        id: '1',
        title: 'De observable a Señal',
        url: 'https://www.youtube.com/watch?v=kCATxUtogrY'
      },
      {
        id: '2',
        title: 'Required | @Input',
        url: 'https://www.youtube.com/watch?v=G9bghx5CBYw&t=9s'
      },
      {
        id: '3',
        title: 'Defer Blocks',
        url: 'https://www.youtube.com/watch?v=633SsJjnjkQ'
      }
    ]
  },
  {
    id: '5',
    name: 'ASP.net',
    links: [
      {
        id: '1',
        title: 'De observable a Señal',
        url: 'https://www.youtube.com/watch?v=kCATxUtogrY'
      },
      {
        id: '2',
        title: 'Required | @Input',
        url: 'https://www.youtube.com/watch?v=G9bghx5CBYw&t=9s'
      },
      {
        id: '3',
        title: 'Defer Blocks',
        url: 'https://www.youtube.com/watch?v=633SsJjnjkQ'
      }
    ]
  }];

  getFolders(): Folder[] {
    return this.folders;
  }

  getFolderById(id: string): Folder | undefined {
    return this.folders.find(folder => folder.id === id);
  }

  addFolder(folder: Folder): void {
    this.folders.push(folder);
  }

  addLinkToFolder(folderId: string, link: Link): void {
    const folder = this.getFolderById(folderId);

    if (folder) {
      folder.links.push(link);
    }
  }

  deleteLinkFromFolder(folderId: string, linkId: string): void {
    const folder = this.getFolderById(folderId);
    if (folder) {
      folder.links = folder.links.filter(link => link.id !== linkId);
    }
  }

  constructor() { }
}
