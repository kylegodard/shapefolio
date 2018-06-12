import { Component, OnInit } from '@angular/core';
import { Position } from '../position';
import { POSITIONS } from '../mock-positions';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions = POSITIONS;
  selectedPosition: Position;

  constructor() { }

  ngOnInit() {
  }

  toggleSelect(position: Position) {
    if (this.selectedPosition === position) {
      this.selectedPosition = null;
    } else {
      this.selectedPosition = position;
    }
  }
}
