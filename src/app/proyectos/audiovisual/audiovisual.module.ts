import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiovisualPageRoutingModule } from './audiovisual-routing.module';

import { AudiovisualPage } from './audiovisual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiovisualPageRoutingModule
  ],
  declarations: [AudiovisualPage]
})
export class AudiovisualPageModule {}
