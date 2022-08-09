import Race from './Race';

class Halfling extends Race {
  private static createdInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.createdInstances += 1;
  }

  private _maxLifePoints = 60;
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.createdInstances;
  }
}

export default Halfling;