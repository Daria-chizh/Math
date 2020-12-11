export default class RemoteAttacker {
  setStoned(value) {
    this.stoned = value;
  }

  getStoned() {
    return this.stoned;
  }

  setAttack(baseAttack, distance) {
    const distanceCoefficient = 100 - (distance - 1) * 10;

    let coefficientForStonedEffect;
    if (this.stoned === true) {
      coefficientForStonedEffect = distanceCoefficient - Math.log2(distance) * 5;
    } else {
      coefficientForStonedEffect = distanceCoefficient;
    }

    this.attack = baseAttack * coefficientForStonedEffect;
  }

  getAttack() {
    return this.attack;
  }
}
