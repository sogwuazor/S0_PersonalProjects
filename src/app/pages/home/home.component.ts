import { Component, OnInit } from '@angular/core';

import {NgOverlayComponent} from '../../widgets/ng-overlay/ng-overlay.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	_overlay: NgOverlayComponent;

  constructor() { }

  showOverlay() {
  	this._overlay = new NgOverlayComponent({title: 'My Name is Fred'});
  }

  ngOnInit() {
  }

}
