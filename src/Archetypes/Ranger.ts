import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;
  constructor(
    name: string,
  ) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;