import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {PetListComponent} from './pet-list.component';
import {PetsService} from './pets.service';
import {PetInputComponent} from './pet-input.component';
import {PetDetail} from './pet-detail.component';
import {PetFilter} from './pet-filter.pipe';
import {LetterSelectorComponent} from './letter-selector.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, LetterSelectorComponent,PetDetail,PetFilter, PetListComponent, PetInputComponent],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
