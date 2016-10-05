import {Component} from '@angular/core';
import {PetsService} from './pets.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-list',
  styles: [``],
  template: `<h3>Pet List</h3>
              <letter-selector [letter]="filterByLetter" (select)="setLetter($event)"></letter-selector>
              <ul style="list-style: none;">
                <li *ngFor="let currentPet of petsService.pets | petFilter:filterByLetter">
                     <pet-detail [pet]="currentPet"></pet-detail>
                   </li>
              </ul>`
})
export class PetListComponent {
  pets: PetModel[];
  filterByLetter = 'A';

  constructor(private petsService: PetsService) {
  }

  setLetter(letter) {
    console.log('letter selected', letter);
    this.filterByLetter = letter;
  }

}
