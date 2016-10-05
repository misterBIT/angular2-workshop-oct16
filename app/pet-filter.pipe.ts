import {PipeTransform, Pipe} from '@angular/core';
import {PetModel} from './pet.model';
@Pipe({name: 'petFilter'})
export class PetFilter implements PipeTransform {
  transform(petList: PetModel[], letter: string): PetModel[] {
    return petList
      .filter((pet)=>pet.name.startsWith(letter));
  }

}
