import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { flightsHexList } from '../../../data/flights-hex-list-data';
import { flightsObjectArrMock } from '../../../data/flights-object-arr-mock';

@Injectable({ providedIn: 'root' })
export class ActiveFlightDataResolver implements Resolve<Object> {
  constructor(private httpCLient: HttpClient) {}

  resolve(): Observable<Object> {
    let hexParam: string = '';
    flightsHexList.forEach((flight: string) => {
      hexParam = hexParam ? hexParam + ',' + flight : hexParam + flight;
    });

    //  TODO ODKOMENTOWAĆ JEŻELI CHCEMY UŻYĆ PRAWDZIWEGO API
    // return this.httpCLient.get(
    //   'https://airlabs.co/api/v9/flights?api_key=68b48137-df0e-4491-a170-7ecbc184aa57&hex=' +
    //     hexParam
    // );

    return of({
      response: flightsObjectArrMock,
    });
  }
}
