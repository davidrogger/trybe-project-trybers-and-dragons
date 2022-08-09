import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archtype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    private _name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archtype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archtype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race() : Race {
    return this._race;
  }

  public get archetype() : Archetype {
    return this._archtype;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }

  public get dexterity() : number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const receiveAtk = attackPoints - this._defense;
    if (receiveAtk > 0) {
      const lifeAfterReceiveAtk = this._lifePoints - receiveAtk;
      if (lifeAfterReceiveAtk < 0) {
        this._lifePoints = -1;
      } else {
        this._lifePoints = lifeAfterReceiveAtk;
      }      
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  levelUp(): void {
    const currentyStrength = this._strength;
    const currentyDexterity = this._dexterity;
    const currentyDefense = this._defense;
    this._maxLifePoints = this.maxLifeDistribution();
    this._lifePoints = this._maxLifePoints;
    this._strength = currentyStrength + getRandomInt(1, 10);
    this._dexterity = currentyDexterity + getRandomInt(1, 10);
    this._defense = currentyDefense + getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  maxLifeDistribution() {
    const lifeThreshold = this._race.maxLifePoints;
    const currentyMaxLife = this._maxLifePoints;
    const newMaxLife = currentyMaxLife + getRandomInt(1, 10);
    if (newMaxLife >= lifeThreshold) return lifeThreshold;
    return newMaxLife;
  }

  special(enemy: Fighter): void {
    console.log(
      `${this._name}: Vem k inimigu ki te \
      enchu de porradaaaaaaaa ${this._strength}!!
      :punch: :raised_hands:${enemy.defense}`,
    );
  }
}

export default Character;