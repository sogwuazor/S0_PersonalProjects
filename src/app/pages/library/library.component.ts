import {Component, OnInit} from '@angular/core';
import {CardItem} from '../../widgets/card/card-item';
import {CardService} from '../../widgets/card/card.service';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
	user = 'Steven Ogwuazor';
	cards: CardItem[];

	constructor(private cardService: CardService) {
	}

	ngOnInit() {
		this.cards = this.cardService.getCards();
	}
}
