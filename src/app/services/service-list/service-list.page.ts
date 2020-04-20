import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service​';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {
  services: Service[];

  constructor(private serviceService:ServiceService) { }

 async ngOnInit() {
    this.services = await this.serviceService.get();
  }

}
