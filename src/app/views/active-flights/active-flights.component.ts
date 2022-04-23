import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { airplainsData } from '../../data/airplains-data';
import { AirplaneData } from '../../models/airplane.interface';
import {
  FlightData,
  FlighDtotResponseData,
  FlightDto,
} from '../../models/flight.interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { AircraftTypes } from './../../enums/aircraft-types';

@Component({
  selector: 'app-active-flights',
  templateUrl: './active-flights.component.html',
  styleUrls: ['./active-flights.component.css'],
})
export class ActiveFlightsComponent implements OnInit, AfterViewInit {
  @ViewChild('activeFlightsTbSort') activeFlightsTbSort = new MatSort();
  public flightData: FlightDto;
  public dataSource: any;
  public datePipe = new DatePipe('en-US');
  public flightsObjectArr: FlightData[] = [];
  displayedColumns: string[] = [
    'position',
    'hex',
    'airline_iata',
    'airline_icao',
    'reg_number',
    'flag',
    'manufacturer',
    'type',
    'is_in_pl_borders',
  ];
  public minLat = 49.0;
  public maxLat = 54.5;
  public minLng = 14.07;
  public maxLng = 24.09;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.flightData = this.activatedRoute.snapshot.data.activeFlightData;
    this.createFlightsObject();
    this.dataSource = new MatTableDataSource(this.flightsObjectArr);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.activeFlightsTbSort;
  }

  public showMap(lat: string, lng: string): void {}

  public createFlightsObject(): void {
    let index: number = 0;

    this.flightsObjectArr = this.flightData.response.map(
      (flightData: FlighDtotResponseData) => {
        index = index + 1;
        const flightLat = flightData.lat;
        const flightLng = flightData.lng;
        const polLat = flightLat >= this.minLat && flightLat <= this.maxLat;
        const polLng = flightLng >= this.minLng && flightLng <= this.maxLng;
        const manufacturer = airplainsData.find((data: AirplaneData) => {
          return data.hex === flightData.hex;
        })?.manufacturer;
        const typeIcao: string = airplainsData.find((data: AirplaneData) => {
          return data.hex === flightData.hex;
        })?.icao;
        const type = AircraftTypes[typeIcao];
        const unixTime: number = flightData.updated * 1000;
        const lastpositionUpdate = this.datePipe.transform(
          // @ts-ignore
          Date(unixTime),
          'M/d/yy, h:mm a'
        );

        return {
          index: index,
          airline_iata: flightData.airline_iata,
          airline_icao: flightData.airline_icao,
          alt: flightData.alt,
          dir: flightData.dir,
          flag: flightData.flag,
          flight_icao: flightData.flight_icao,
          flight_number: flightData.flight_number,
          hex: flightData.hex,
          lat: flightData.lat,
          lng: flightData.lng,
          reg_number: flightData.reg_number,
          speed: flightData.speed,
          status: flightData.status,
          v_speed: flightData.v_speed,
          is_in_pl_borders: polLat && polLng,
          last_position_update: lastpositionUpdate,
          manufacturer: manufacturer,
          type: type,
        };
      }
    );
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
