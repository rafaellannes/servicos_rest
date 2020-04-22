import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { Schedule } from './schedule';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  sendSchedule(schedule: Schedule) {
    console.log(schedule);
    return this.http.post(`${environment.api}/schedules`,
      {
        status: schedule.status,
        date: this.datePipe.transform(schedule.date, 'yyyy-MM-ddTHH:mm'),
        service: schedule.service
      }).toPromise();
  }

  getSchedules() {
    return this.http.get<Schedule[]>(`${environment.api}/schedules`)
      .pipe(
        map(data => {
          const ScheduleArray = data as any[];
          const schedules = ScheduleArray.map(data => new Schedule(data));
          return schedules;
        })
      ).toPromise();
  }

}
