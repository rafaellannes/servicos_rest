import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../shared/service​';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  @Input()
  service: Service

  constructor() { }

  ngOnInit() {}

}
