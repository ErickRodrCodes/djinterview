/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CountDownFieldComponent } from './components/count-down-field/count-down-field.component';
import { CurrentDateFieldComponent } from './components/current-date-field/current-date-field.component';
import { CurrentDateService } from './service/currentDate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('labelContainer', {
    read: ViewContainerRef,
  })
  viewContainerRef!: ViewContainerRef;
  Button1 = 'Add Countdown';
  Button2 = 'Add Current Time';
  ButtonClass1 = 'blue';
  ButtonClass2 = 'blue';

  ButtonAction1 = () => {};
  ButtonAction2 = () => {};
  constructor(private currentDateService: CurrentDateService) {}

  public ngOnInit(): void {
    this.currentDateService.intialize();

    this.ButtonAction1 = this.addCountDown;
    this.ButtonAction2 = this.addDate;
  }

  public addDate = () => {
    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.createComponent(CurrentDateFieldComponent);
  };

  public addCountDown = () => {
    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.createComponent(CountDownFieldComponent);
  };
}
