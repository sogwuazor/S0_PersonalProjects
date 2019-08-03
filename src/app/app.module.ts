import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { FooterComponent } from './components/footer/footer.component';

//odd components not quite pages maybe better to call them template objects
import {PaperCardComponent} from './widgets/card/paperCard.component';
import {CardFieldComponent} from './widgets/card/card-field.component';
import {CardDirective} from './widgets/card/card.directive';
import {CardService} from './widgets/card/card.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LibraryComponent,
    FooterComponent,
    CardFieldComponent,
    PaperCardComponent,
    CardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [PaperCardComponent],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
