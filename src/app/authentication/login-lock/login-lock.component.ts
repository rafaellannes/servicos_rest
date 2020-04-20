import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-lock',
  templateUrl: './login-lock.component.html',
  styleUrls: ['./login-lock.component.scss'],
})
export class LoginLockComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  message: string = '';


  constructor() { }

  ngOnInit() {}

}
