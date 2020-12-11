import RemoteAttacker from './RemoteAttacker';

export default class Daemon extends RemoteAttacker {
  setAttack(distance) {
    super.setAttack(50, distance);
  }
}
