import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosPage } from './proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectosPage
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    path: 'audiovisual',
    loadChildren: () => import('./audiovisual/audiovisual.module').then( m => m.AudiovisualPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./grafico/grafico.module').then( m => m.GraficoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosPageRoutingModule {}
