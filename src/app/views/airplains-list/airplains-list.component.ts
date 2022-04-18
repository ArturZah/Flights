import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AirplaneData } from '../../models/airplane.interface';
import { airplainsData } from '../../data/flights-hex-list-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-airplains-list',
  templateUrl: './airplains-list.component.html',
  styleUrls: ['./airplains-list.component.css'],
})
export class AirplainsListComponent implements OnInit, AfterViewInit {
  @ViewChild('airplainsTbSort') airplainsTbSort = new MatSort();
  public airplainsData: AirplaneData[] = [];
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

  ngAfterViewInit() {
    this.dataSource.sort = this.airplainsTbSort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
