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
    manufacturer: string,
    type?: string,
    flag?: string
  ): void {
    const markerSize: any = [25, 40];
    const icon = leaflet.icon({
      iconUrl: './assets/img/marker.png',
      shadowUrl: '',
      iconSize: markerSize, // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 10], // the same for the shadow
      popupAnchor: [15, -5], // point from which the popup should open relative to the iconAnchor
    });

    const marker = leaflet.marker([lat, lng], { icon: icon });

    marker
      .addTo(map)
      .bindPopup(
        '<h4 style="margin: 0;">' +
          index +
          ': ' +
          hex +
          '</h4>' +
          '<h5 style="font-weight: 700;">' +
          (manufacturer ? manufacturer : '') +
          (type ? ' - ' + type : '') +
          '</h5>' +
          'From: ' +
          (flag
            ? flag +
              '<img style="width: 26px; height: 15px; margin-left: 5px; position: relative; top: 2px;" src="./assets/img/' +
              flag +
              '.png">'
            : 'N/N')
      );
  }
}
