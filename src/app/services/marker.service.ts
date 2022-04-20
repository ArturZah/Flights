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
    index: number,
    flag?: string
  ): void {
    const flagSize: any = [35, 20];
    const markerSize: any = [25, 40];
    const icon = leaflet.icon({
      iconUrl: flag
        ? './assets/img/' + flag + '.png'
        : './assets/img/marker.png',
      shadowUrl: '',

      iconSize: flag ? flagSize : markerSize, // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 10], // the same for the shadow
      popupAnchor: [15, -5], // point from which the popup should open relative to the iconAnchor
    });

    const marker = leaflet.marker([lat, lng], { icon: icon });

    marker
      .addTo(map)
      .bindPopup(index + ': ' + hex + ' | from: ' + (flag ? flag : 'N/N'));
  }
}
