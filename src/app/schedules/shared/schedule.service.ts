import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { Schedule } from './schedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  sendSchedule(schedule: Schedule) {
    console.log(schedule);
    return this.http.post('http://localhost:8000/api/schedules',
      {
        status: schedule.status,
        date: this.datePipe.transform(schedule.date, 'yyyy-MM-ddTHH:mm'),
        service: schedule.service
      }).toPromise();
  }

  getSchedules() {
    return this.http.get<Schedule[]>('http://localhost:8000/api/schedules')
      .pipe(
        map(data => {
          const ScheduleArray = data as any[];
          const schedules = ScheduleArray.map(data => new Schedule(data));
          return schedules;
        })
      ).toPromise();
  }

}
