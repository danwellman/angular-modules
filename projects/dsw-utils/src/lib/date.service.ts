import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public dateFromUnixTimestamp(unixTimestamp: number) {
    return moment.unix(unixTimestamp).format('L');
  }
}
