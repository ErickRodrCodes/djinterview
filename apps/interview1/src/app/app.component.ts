/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  Button1 = 'Add Countdown';
  Button2 = 'Add Current Time';
  ButtonClass1 = 'blue';
  ButtonClass2 = 'blue';

  ButtonAction1 = () => {};
  ButtonAction2 = () => {};
  constructor() {}

  public ngOnInit(): void {}
}
