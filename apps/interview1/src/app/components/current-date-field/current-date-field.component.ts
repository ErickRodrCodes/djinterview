import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from '../../service/currentDate.service';
@Component({
  selector: 'app-current-date-field',
  templateUrl: './current-date-field.component.html',
  styleUrls: ['./current-date-field.component.scss'],
})
export class CurrentDateFieldComponent implements OnInit {
  label = '';

  constructor(private currentDateService: CurrentDateService) {}

  ngOnInit(): void {}
}
