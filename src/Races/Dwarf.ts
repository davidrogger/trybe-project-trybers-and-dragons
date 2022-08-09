import Race from './Race';

class Dwarf extends Race {
  createdInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.createdInstances += 1;
  }

  private _maxLifePoints = 80;
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  createdRacesInstances(): number {
    return this.createdInstances;
  }
}

export default Dwarf;