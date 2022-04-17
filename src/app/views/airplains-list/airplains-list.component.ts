import { Component, OnInit } from '@angular/core';
import { AirplaneData } from '../../models/airplane.interface';
import { airplainsData } from '../../data/flights-hex-list-data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-airplains-list',
  templateUrl: './airplains-list.component.html',
  styleUrls: ['./airplains-list.component.css'],
})
export class AirplainsListComponent implements OnInit {
  public airplainsData: AirplaneData[];
  public dataSource: any;
  displayedColumns: string[] = [
    'hex',
    'icao',
    'iata',
    'airline_iata',
    'airline_icao',
    'manufacturer',
  ];

  constructor() {}

  ngOnInit(): void {
    this.airplainsData = airplainsData;
    this.dataSource = new MatTableDataSource(this.airplainsData);
  }
}
