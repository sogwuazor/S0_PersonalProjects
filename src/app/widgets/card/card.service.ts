import {Injectable} from '@angular/core';
import sampleData from '../../configurations/testDataForGrid.json';

//const sampleData = {data: []};

import {PaperCardComponent} from './paperCard.component';
import {CardItem} from './card-item';

@Injectable()
export class CardService {
  constructor () {
    console.log(JSON.stringify(sampleData));
  }
  getCards() {
    let data = this.getData(),
      componentObject = [];

    data.forEach(x => {
      componentObject.push(new CardItem(PaperCardComponent, x));
    });
    return componentObject;
  }

  private getData() {
    let _this = this;
    let cardCount = 10;

    if (!sampleData) {
      return [];
    }
    if (sampleData.data.length < cardCount) {
      return sampleData.data;
    }

    return sampleData.data.slice(0, cardCount);
  }
}
