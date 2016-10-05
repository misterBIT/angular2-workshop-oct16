import {PetModel} from './pet.model';
export class PetsService {

  pets = [new PetModel('Avsha'), new PetModel('Abulele'), new PetModel('AvAv'),
    new PetModel('Banian'), new PetModel('Baba'), new PetModel('Basta'),
    new PetModel('Craco'), new PetModel('Charli'), new PetModel('Chompi')];

  addPet(name: string) {
    this.pets = [...this.pets,new PetModel(name)];
    // this.pets.push(new PetModel(name));
  }
}
