import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: SimpleFighter, private _monsters: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    this.mortalKombat();
    return super.fight();
  }

  mortalKombat(): void {
    let willFight = true;
    while (willFight) {
      willFight = this.rounds(this._monsters.length);
    }
  }

  rounds(rounds: number): boolean {
    let willFightRound = true;
    for (let index = 0; index < rounds; index += 1) {
      this.player.attack(this._monsters[index]);
      this._monsters[index].attack(this.player);
      willFightRound = ![
        this.player.lifePoints,
        this._monsters[index].lifePoints]
        .includes(-1);
      if (!willFightRound) index = rounds;
    }
    return willFightRound;
  }
}

export default PVE;