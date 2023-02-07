import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-field',
  templateUrl: './count-down-field.component.html',
  styleUrls: ['./count-down-field.component.scss'],
})
export class CountDownFieldComponent implements OnInit {
  label = '';

  ngOnInit(): void {}
}
