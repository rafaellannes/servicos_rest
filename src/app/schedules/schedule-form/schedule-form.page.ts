import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ToastService } from 'src/app/core/service/toast.service';

import { AuthService } from 'src/app/authentication/shared/auth.service';
import { ServiceService } from 'src/app/services/shared/service.service';
import { ScheduleService } from '../shared/schedule.service';
import { ScheduleModel } from '../shared/schedule-model';
import { Service } from 'src/app/services/shared/service​';
import { Schedule } from '../shared/schedule';


@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.page.html',
  styleUrls: ['./schedule-form.page.scss'],
})
export class ScheduleFormPage implements OnInit {
  schedulModel: ScheduleModel = new ScheduleModel();
  service: Service = null;
  times: Array<{ name: string, value: string }> = [];
  isUserAuthenticated: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private datePipe: DatePipe,
    private serviceService: ServiceService, private scheduleService: ScheduleService,
    private toast: ToastService, private router: Router, private authService: AuthService) { }

  async ngOnInit() {
    this.isUserAuthenticated = await this.authService.isUserAuth();
    const serviceId = this.getServiceId();
    this.service = await this.getService(serviceId);
    
  }

  getServiceId() {
    const id = this.activatedRoute.snapshot.paramMap.get('serviceId');
    if (id) {
      return parseInt(id);
    }
    return null;
  }

  async getService(id: number) {
    const service = await this.serviceService.getById(id);
    return service;
  }

  dateChanged() {
    this.populateTimes();
  }

  populateTimes() {
    this.times = [];
    const date = new Date(Date.parse(this.schedulModel.date));
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    for (let i = 9; i < 19; i++) {
      let scheduleDate = new Date(year, month, day, i, 0, 0, 0);
      this.times.push({
        name: this.datePipe.transform(scheduleDate, 'HH:mm'),
        value: this.datePipe.transform(scheduleDate, 'yyyy-MM-ddTHH:mm')
      });
    }
  }

  async createSchedule() {
    var schedule = new Schedule();

    schedule.status = Schedule.STATUS.PENDING;
    schedule.date = new Date(Date.parse(this.schedulModel.time));
    schedule.service = this.service;

    return schedule;
  }

  async onSubmit() {
    try {
      const schedule = await this.createSchedule();
      const result: any = await this.scheduleService.sendSchedule(schedule);
      console.log(result.id);

      this.toast.showSuccess('Agendamento enviado com sucesso.');
      this.router.navigate(['../']);
    } catch (error) {
      this.toast.showError('Ocorreu algum erro ao tentar enviar o agendamento.');
    }
  }
}
