import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-field',
  templateUrl: './count-down-field.component.html',
  styleUrls: ['./count-down-field.component.scss'],
})
export class CountDownFieldComponent implements OnInit {
  label = '05:00';

  ngOnInit(): void {
    let timer = 60 * 5;
    let minutes, seconds;
    setInterval(() => {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.label = minutes + ':' + seconds;
      if (--timer < 0) {
        this.label = '00:00';
      }
    }, 1000);
  }
}
