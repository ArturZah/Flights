import { Component, OnInit } from '@angular/core';
import { AircraftTypes } from '../../enums/aircraft-types';

@Component({
  selector: 'app-airplains-types',
  templateUrl: './airplains-types.component.html',
  styleUrls: ['./airplains-types.component.css'],
})
export class AirplainsTypesComponent implements OnInit {
  public typesData: any[] = [
    {
      name: AircraftTypes.C17,
      type: 'C17',
      description:
        'The C-17 Globemaster III is a large military transport aircraft that was developed for the United States Air Force (USAF) from the 1980s to the early 1990s by McDonnell Douglas',
    },
    {
      name: AircraftTypes.C130,
      type: 'C130',
      description:
        'The C-130 Hercules is an American four-engine turboprop military transport aircraft designed and built originally by Lockheed Martin. Capable of using unprepared runways for landings, the C-130 was designed as a troop, medevac, and cargo transporter.',
    },
    {
      name: AircraftTypes.IL76,
      type: 'IL76',
      description:
        'The Ilyushin Il-76 (NATO: Candid) is a multi-purpose, fixed-wing, four-engine turbofan strategic airlifter designed by the Soviet Unions Ilyushin design bureau.',
    },
    {
      name: AircraftTypes.K35R,
      type: 'K35R',
      description:
        'The Boeing KC-135 Stratotanker is an American military aerial refueling aircraft that was developed from the Boeing 367-80 prototype. The KC-135 was the US Air Forces first jet-powered refueling tanker.',
    },
    {
      name: AircraftTypes.H60,
      type: 'H60',
      description:
        'The UH-60 Black Hawk is a four-blade, twin-engine, medium-lift utility military helicopter manufactured by Sikorsky Aircraft.',
    },
    {
      name: AircraftTypes.A332,
      type: 'A332',
      description:
        'The Voyager KC3 is an aerial refuelling tanker aircraft based on the civilian Airbus A330',
    },
    {
      name: AircraftTypes.DC10,
      type: 'DC10',
      description:
        'The McDonnell Douglas KC-10 Extender is an American aerial refueling tanker aircraft operated by the United States Air Force (USAF)',
    },
    {
      name: AircraftTypes.H47,
      type: 'CH47',
      description:
        'The CH-47 Chinook is a tandem rotor helicopter developed by American rotorcraft company Vertol and manufactured by Boeing Vertol. The Chinook is a heavy-lift helicopter that is among the heaviest lifting Western helicopters.',
    },
    {
      name: AircraftTypes.E3CF,
      type: 'E3CF',
      description:
        'The Boeing E-3 Sentry is an American airborne early warning and control (AEW&C) aircraft developed by Boeing. Derived from the Boeing 707 airliner, it provides all-weather surveillance, command, control, and communications, and is used by the United States Air Force and NATO.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
