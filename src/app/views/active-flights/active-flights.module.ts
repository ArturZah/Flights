import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { ActiveFlightsComponent } from './active-flights.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [ActiveFlightsComponent, MapComponent],
  imports: [SharedModule],
  exports: [ActiveFlightsComponent],
})
export class ActiveFlightsModule {}
