import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';
import { ActiveFlightsModule } from './views/active-flights/active-flights.module';
import { ActiveFlightsComponent } from './views/active-flights/active-flights.component';
import { AirplainsListComponent } from './views/airplains-list/airplains-list.component';
import { ActiveFlightDataResolver } from './views/active-flights/resolver/active-flight-data.resolver';
import { AirplainsTypesComponent } from './views/airplains-types/airplains-types.component';
import { TypeTileComponent } from './views/airplains-types/components/type-tile/type-tile.component';

@NgModule({
  declarations: [AppComponent, AirplainsListComponent, AirplainsTypesComponent, TypeTileComponent],
  imports: [
    ActiveFlightsModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/active-flights', pathMatch: 'full' },
      {
        path: 'active-flights',
        resolve: {
          activeFlightData: ActiveFlightDataResolver,
        },
        component: ActiveFlightsComponent,
      },
      {
        path: 'airplains-list',
        component: AirplainsListComponent,
      },
      {
        path: 'airplains-types',
        component: AirplainsTypesComponent,
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
