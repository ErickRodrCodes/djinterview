import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from '../../service/currentDate.service';
@Component({
  selector: 'app-current-date-field',
  templateUrl: './current-date-field.component.html',
  styleUrls: ['./current-date-field.component.scss'],
  providers: [CurrentDateService],
})
export class CurrentDateFieldComponent implements OnInit {
  label = '';

  constructor(private currentDateService: CurrentDateService) {}

  ngOnInit(): void {
    this.currentDateService.dateSubscription.subscribe((newDate) => {
      this.label = newDate.toLocaleTimeString();
    });
  }
}
