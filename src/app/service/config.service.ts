import { Injectable } from '@angular/core';

export interface INavItem {
  text: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  navigationItems: INavItem[] = [
    {text: 'Home', link: '/'},
    {text: 'Tickets', link: '/tickets'},
    {text: 'About', link: '/about'},
  ];

  constructor() { }
}
