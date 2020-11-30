import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ByePage } from './bye.page';

describe('ByePage', () => {
  let component: ByePage;
  let fixture: ComponentFixture<ByePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ByePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
