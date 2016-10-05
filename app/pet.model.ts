export class PetModel {
  private static maxId = 0;
  name: string;
  id:number;
  awake: boolean = true;

  constructor(name: string) {
    PetModel.maxId++;
    this.id = PetModel.maxId;
    this.name = name;
  }

  get imgUrl() {
    return `img/pet/${this.id}.png`;
  }

}
