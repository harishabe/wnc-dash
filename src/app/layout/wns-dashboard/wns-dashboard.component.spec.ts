
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnsDashboardComponent } from './wns-dashboard.component';

describe('WnsDashboardComponent', () => {
  let component: WnsDashboardComponent;
  let fixture: ComponentFixture<WnsDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WnsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
