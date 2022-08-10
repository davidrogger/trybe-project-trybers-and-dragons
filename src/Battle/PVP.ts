import SimpleFighter from '../Fighter/SimpleFighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: SimpleFighter, private player2: SimpleFighter) {
    super(player);
  }

  fight(): number {
    this.mortalKombat();
    return super.fight();
  }

  mortalKombat() {
    let willFight = true;
    while (willFight) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
      willFight = ![this.player.lifePoints, this.player2.lifePoints]
        .includes(-1);
    }
  }
}

export default PVP;