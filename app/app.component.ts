import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Pets\`R\`Us</h1>
<h2>{{subtitle }}</h2>
              <pet-input></pet-input>
              <pet-list></pet-list>
`

})
export class AppComponent {
  subtitle = '';
  constructor(){
    setTimeout(()=>{
      this.subtitle = 'The Best place for pets'
    },2000)
  }
}
