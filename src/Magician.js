import RemoteAttacker from './RemoteAttacker';

export default class Magician extends RemoteAttacker {
  setAttack(distance) {
    super.setAttack(20, distance);
  }
}
