import { Component, OnInit } from '@angular/core';
import { Schedule } from '../shared/schedule';
import { AuthService } from 'src/app/authentication/shared/auth.service';
import { ScheduleService } from '../shared/schedule.service';

@Component({
  selector: 'app-my-schedules-list',
  templateUrl: './my-schedules-list.page.html',
  styleUrls: ['./my-schedules-list.page.scss'],
})
export class MySchedulesListPage implements OnInit {
  schedules: Schedule[];
  isUserAuthenticated: boolean = false;

  constructor(private AuthService: AuthService, private ScheduleService: ScheduleService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.isUserAuthenticated = await this.AuthService.isUserAuth();
      if(this.isUserAuthenticated){
        this.schedules = await this.ScheduleService.getSchedules();
        console.log(this.schedules);
      }
  }

}
