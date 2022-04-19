import { Injectable } from '@angular/core';
import * as leaflet from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  public icon = leaflet.icon({
    iconUrl: './assets/img/marker.png',
    shadowUrl: '',

    iconSize: [31, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 10], // the same for the shadow
    popupAnchor: [15, -5], // point from which the popup should open relative to the iconAnchor
  });
  constructor() {}

  public makeMarker(
    map: leaflet.Map,
    lat: number,
    lng: number,
    hex: string,
    index: number,
    flag?: string
  ): void {
    const marker = leaflet.marker([lat, lng], { icon: this.icon });

    marker
      .addTo(map)
      .bindPopup(index + ': ' + hex + (flag ? ' | from: ' + flag : ''));
  }
}
