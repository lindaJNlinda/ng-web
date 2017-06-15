/**
 * Created by Administrator on 2017/4/13.
 */
/**
 * Created by Administrator on 2017/4/13.
 */
import { StationsComponent } from './stations.component';
import { StationsMapComponent } from './stations-map/stations-map.component';

export const stationsRoutes = [{
  path: '',
  component: StationsComponent,
  children: [
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    { path: 'map', component: StationsMapComponent }
  ]
}];
