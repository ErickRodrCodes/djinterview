import {
  TestBed,
  ComponentFixture,
  tick,
  fakeAsync,
  flush,
  discardPeriodicTasks,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentDateService } from './service/currentDate.service';
import { CountDownFieldComponent } from './components/count-down-field/count-down-field.component';
import { CurrentDateFieldComponent } from './components/current-date-field/current-date-field.component';

describe.only('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        CountDownFieldComponent,
        CurrentDateFieldComponent,
      ],
      providers: [CurrentDateService],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should initialize the app with two buttons`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('button').length).toBe(2);
  });

  it(
    'Add Countdown button: should add on click a new count down div on the label container',
    <any>fakeAsync((): void => {
      const buttons: HTMLButtonElement[] =
        fixture.nativeElement.querySelectorAll('button');
      buttons[0].click();
      buttons[0].click();
      buttons[0].click();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('.countdown').length).toBe(
        3
      );
      expect(
        fixture.nativeElement.querySelectorAll('.countdown')[0].textContent
      ).toBe('05:00');

      flush();
      discardPeriodicTasks();
    })
  );

  it(
    'Add Current Time button: should add on click a new current date div on the label container',
    <any>fakeAsync((): void => {
      const buttons: HTMLButtonElement[] =
        fixture.nativeElement.querySelectorAll('button');
      buttons[1].click();
      buttons[1].click();
      buttons[1].click();
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelectorAll('.currentdate').length
      ).toBe(3);

      const service = TestBed.inject(CurrentDateService);
      let currentDate = '';
      const subscription = service.dateSubscription.subscribe((newDate) => {
        currentDate = newDate.toLocaleTimeString();
      });

      tick(1000);
      expect(
        fixture.nativeElement.querySelectorAll('.currentdate')[0].textContent
      ).toBe(currentDate);

      expect(
        fixture.nativeElement.querySelectorAll('.currentdate')[1].textContent
      ).toBe(currentDate);

      expect(
        fixture.nativeElement.querySelectorAll('.currentdate')[2].textContent
      ).toBe(currentDate);

      subscription.unsubscribe();

      flush();
      discardPeriodicTasks();
    })
  );
});
