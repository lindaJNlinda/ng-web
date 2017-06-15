/**
 * Created by Administrator on 2017/4/13.
 */
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import { StationsComponent } from './stations.component';
import { stationsRoutes } from './stations.routes';

import { StationsMapComponent } from './stations-map/stations-map.component';

@NgModule({
  imports: [
    RouterModule.forChild(stationsRoutes)
  ],
  declarations: [
    StationsComponent,
    StationsMapComponent
  ]
})
export class StationsModule { }
