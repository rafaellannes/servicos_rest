import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MySchedulesListPage } from './my-schedules-list.page';

describe('MySchedulesListPage', () => {
  let component: MySchedulesListPage;
  let fixture: ComponentFixture<MySchedulesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchedulesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MySchedulesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
