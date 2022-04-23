import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AirplaneData } from '../../models/airplane.interface';
import { airplainsData } from '../../data/airplains-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AircraftTypes } from './../../enums/aircraft-types';

@Component({
  selector: 'app-airplains-list',
  templateUrl: './airplains-list.component.html',
  styleUrls: ['./airplains-list.component.css'],
})
export class AirplainsListComponent implements OnInit, AfterViewInit {
  @ViewChild('airplainsTbSort') airplainsTbSort = new MatSort();
  public airplainsData: AirplaneData[] = [];
  public dataSource: any;
  public aircraftTypes: typeof AircraftTypes = AircraftTypes;
  displayedColumns: string[] = [
    'hex',
    'icao',
    'iata',
    'airline_iata',
    'airline_icao',
    'type',
    'manufacturer',
  ];

  constructor() {}

  ngOnInit(): void {
    this.airplainsData = airplainsData;
    this.dataSource = new MatTableDataSource(this.airplainsData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.airplainsTbSort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
