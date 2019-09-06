import * as $ from 'jquery';

export default class Utilities {
	constructor(){}

	getMaxZIndex() {
		return Math.max.apply(null, $.map($('body > *'), (e, n) => {
			if ($(e).css('position') === 'absolute') {
				return parseInt($(e).css('z-index')) || 1;
			}
		}));
	}
}
