import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Portafolio', url: '/folder/Portafolio', icon: 'albums' },
    { title: 'Experiencia', url: '/experiencia', icon: 'document' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'mail' },
  ];
  constructor() {}
}
