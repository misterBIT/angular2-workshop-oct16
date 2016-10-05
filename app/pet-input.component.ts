import {Component} from '@angular/core';
import {PetsService} from './pets.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-input',
  template: `<label >Add Pet</label>
              <input type="text" #petInput (keyup.enter)="petService.addPet(petInput.value)">`
})
export class PetInputComponent {
  constructor(public petService: PetsService) {
  }

}
