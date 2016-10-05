import {Component, Input, ViewEncapsulation} from '@angular/core';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-detail',
  styles: [`
.awake{
      color:blue;
}
.petImage {
        max-width:100px;
}`],
  template: `<img class="petImage" [src]="pet.imgUrl"/>
                <span> {{pet.name}}</span>
                <span [class.awake]="pet.awake">Awake?
                  <input type="checkbox" (change)='pet.awake = !pet.awake' [checked]="pet.awake"> 
                </span>`
})
export class PetDetail {
  @Input() public pet: PetModel


}
