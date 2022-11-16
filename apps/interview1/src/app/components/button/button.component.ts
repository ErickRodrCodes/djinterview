import { Component, OnInit, Input } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() ButtonClass: string = 'red';
  @Input() ButtonText: string = 'Button';
  @Input() ButtonAction: () => void = () => {
    console.log('Button clicked');
  };
  ngOnInit(): void {}
}
