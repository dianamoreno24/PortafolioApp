import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Portafolio', url: '/proyectos', icon: 'albums' },
    { title: 'Experiencia', url: '/experiencia', icon: 'document' },
    { title: 'Contacto', url: '/contact', icon: 'mail' }
  ];
  constructor() {}
}
