import { AfterViewInit, Component, Input } from '@angular/core';
import * as leaflet from 'leaflet';
import { FlightData } from 'src/app/models/flight.interfaces';
import { MarkerService } from '../../../../services/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  @Input() public flightsData: FlightData[];
  private map: leaflet.Map;

  constructor(private markerService: MarkerService) {}

  private initMap(): void {
    this.map = leaflet.map('map', {
      center: [52, 18],
      zoom: 5,
    });

    const tiles = leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();

    this.flightsData.forEach((data: FlightData) => {
      this.markerService.makeMarker(
        this.map,
        data.lat,
        data.lng,
        data.hex,
        data.index,
        data.manufacturer,
        data?.flag
      );
    });
  }
}
