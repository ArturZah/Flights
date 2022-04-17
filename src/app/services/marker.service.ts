import { Injectable } from '@angular/core';
import * as leaflet from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor() {}

  public makeMarker(
    map: leaflet.Map,
    lat: number,
    lng: number,
    hex: string,
    index: number
  ): void {
    const marker = leaflet.marker([lat, lng]);

    marker.addTo(map).bindPopup(index + ': ' + hex);
  }
}
