import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiovisualPage } from './audiovisual.page';

const routes: Routes = [
  {
    path: '',
    component: AudiovisualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiovisualPageRoutingModule {}
