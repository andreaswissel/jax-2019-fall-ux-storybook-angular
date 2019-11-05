import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() public label: string;
  @Input() public type: string;
  @Input() public placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
