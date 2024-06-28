import { Injectable } from '@angular/core';
import { Icon } from '../interfaces/icon.interface';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  private icons: Icon[] = [
    {
      id: '1',
      name: 'Youtube',
      icon: 'bi bi-youtube'
    },
    {
      id: '2',
      name: 'Wordpres',
      icon: 'bi bi-wordpress'
    },
    {
      id: '3',
      name: 'Wikipedia',
      icon: 'bi bi-wikipedia'
    },       
    {
      id: '4',
      name: 'Google',
      icon: 'bi bi-google'
    }
  ]

  getIcons(repeat: number): string[] {
    let result: string[] = [];
    for (let i = 0; i < repeat; i++) {
      this.icons.forEach((icon) => result.push(icon.icon));
    }
    return result;
  }
  constructor() { }
}
