import {Component} from '@angular/core';
import {OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  data;

  constructor() {}

  ngOnInit() {
    console.log('i\'m alive man!!!');
  }

  ngOnDestroy(): void {
    console.log('I\'m destroyed now!!');
  }
}
