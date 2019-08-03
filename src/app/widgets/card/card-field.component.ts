/**
 * @author Steven Ogwuazor
 *
 * copyright Unassailable Tech LLC. All Rights Reserved
 * */
import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

import {CardDirective} from './card.directive';
import {CardItem} from './card-item';
import {CardComponent} from './card.component';

@Component({
  selector: 'app-card-field',
  template: `
    <div class="card-field-example">
      <ng-template card-host></ng-template>
    </div>
  `,
  styleUrls: ['./card-field.component.css']
})
export class CardFieldComponent implements OnInit, OnDestroy {
  @Input() cards:CardItem[];
  @ViewChild(CardDirective) cardHoster: CardDirective;
  //util:any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){
    /**
     * Try not to do much here yet*/
  }

  ngOnInit() {
    //this.util = require('../../common/utilities');
    //you can fetch data before this if you want
    this.loadComponent();
  }

  ngOnDestroy() {}

  loadComponent() {
    console.group("%cLets work on this as simply as possible;", {"background-color":"black", "color":"yellow;"});
    console.log("data", this.cards);

    this.cards.forEach(card => {
      //the cards to be loaded
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(card.component);
      //let $element = this.cardHoster.containerViewRef;
      //get reference and create widget within it using factory
      let cardReference = this.cardHoster.containerViewRef.createComponent(componentFactory);
      (<CardComponent>cardReference.instance).data = card.data;
    });

  }
}
