import Race from './Race';

class Elf extends Race {
  private static createdInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.createdInstances += 1;
  }

  private _maxLifePoints = 99;
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.createdInstances;
  }
}

export default Elf;