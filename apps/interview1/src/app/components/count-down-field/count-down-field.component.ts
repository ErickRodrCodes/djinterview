import { Component, OnInit, DoCheck } from '@angular/core';
import { throws } from 'assert';
import { Subscription, interval, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-count-down-field',
  templateUrl: './count-down-field.component.html',
  styleUrls: ['./count-down-field.component.scss'],
})
export class CountDownFieldComponent implements OnInit {
  label = '';
  time = new BehaviorSubject('');
  timeSubscription = this.time.asObservable();
  timer = 60 * 5;
  minutes = 0;
  seconds = 0;

  ngOnInit(): void {
    this.timeSubscription.subscribe((newTime) => {
      if (newTime) {
        this.label = newTime;
      }
    });

    this.doTimer();

    setInterval(() => {
      this.doTimer();
    }, 1000);
  }

  doTimer(): void {
    if (this.timer < 0) {
      this.time.next('00:00');
      return;
    }
    this.minutes = parseInt((this.timer / 60).toString(), 10);
    this.seconds = parseInt((this.timer % 60).toString(), 10);

    const str_minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    const str_seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    this.time.next(str_minutes + ':' + str_seconds);
    this.timer--;
  }
}
