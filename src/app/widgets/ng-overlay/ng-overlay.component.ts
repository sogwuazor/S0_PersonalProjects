import {Component, OnInit, OnDestroy} from '@angular/core';

import {$} from 'jquery';
import utilities from '../../common/utilities';

@Component({
	selector: 'app-ng-overlay',
	templateUrl: './ng-overlay.component.html',
	styleUrls: ['./ng-overlay.component.css']
})
export class NgOverlayComponent implements OnInit, OnDestroy {
	options: any = {};
	background: any;

	constructor(opts: any) {
		if (opts) {
			this.options = Object.assign(opts, this.options);
		}

		if (!this.options.title) {
			this.options.title = 'New Overlay';
		}
	}

	ngOnInit() {
		this.renderBackground();
		this.bindListeners();
	}

	renderBackground() {
		if (!this.background) {
			this.background = $('<div class="overlay-background"></div>');
			debugger;
			this.background.css({
				zIndex: utilities.getMaxZIndex() + 1
			});

			//add the background
			this.background.appendTo(document);
		}
	}

	resize() {
		let intHeight, intWidth, intTop, intLeft;
		/*intHeight = this._overlay.height();
		* intWidth = this._overlay.width()
		* intTop = ($(window).height() - intHeight) / 2
		* intLeft = ($(window).height() - intWidth) / 2
		* this._overlay.css({top: intTop, left: intLeft})
		* todo: consider triggering a resize event*/
	}

	close() {
		/*unknown so far, would need some awesome options for this overlay*/
	}

	bindListeners() {
		debugger;
	}

	ngOnDestroy(): void {
		if (this.background) {
			this.background.remove();
		}
	}

}
