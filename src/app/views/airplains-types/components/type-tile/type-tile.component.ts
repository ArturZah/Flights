import { Component, Input, OnInit } from '@angular/core';
import { AircraftTypes } from '../../../../enums/aircraft-types';

@Component({
  selector: 'app-type-tile',
  templateUrl: './type-tile.component.html',
  styleUrls: ['./type-tile.component.css'],
})
export class TypeTileComponent implements OnInit {
  @Input() public typesData: any;

  constructor() {}

  ngOnInit(): void {}
}
