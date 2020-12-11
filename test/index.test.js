import Magician from '../src/Magician';
import Daemon from '../src/Daemon';
import RemoteAttacker from '../src/RemoteAttacker';

test('use method setStoned = true', () => {
  const remoteAttacker = new RemoteAttacker();
  remoteAttacker.setStoned(true);

  expect(remoteAttacker.getStoned()).toBe(true);
});

test('use method setStoned = false', () => {
  const remoteAttacker = new RemoteAttacker();
  remoteAttacker.setStoned(false);

  expect(remoteAttacker.getStoned()).toBe(false);
});

test('use method setAttack, setStoned = true ', () => {
  const remoteAttacker = new RemoteAttacker();
  remoteAttacker.setStoned(true);
  remoteAttacker.setAttack(30, 2);

  expect(remoteAttacker.getAttack()).toBe(2550);
});

test('use method setAttack, setStoned = false', () => {
  const remoteAttacker = new RemoteAttacker();
  remoteAttacker.setStoned(false);
  remoteAttacker.setAttack(30, 2);

  expect(remoteAttacker.getAttack()).toBe(2700);
});

test('Magician hero, setStoned = true', () => {
  const magician = new Magician();
  magician.setStoned(true);
  magician.setAttack(1);

  expect(magician.getAttack()).toBe(2000);
});

test('Magician hero, setStoned = false', () => {
  const magician = new Magician();
  magician.setStoned(false);
  magician.setAttack(1);

  expect(magician.getAttack()).toBe(2000);
});

test('Daemon hero, setStoned = true', () => {
  const daemon = new Daemon();
  daemon.setStoned(true);
  daemon.setAttack(2);

  expect(daemon.getAttack()).toBe(4250);
});

test('Daemon hero, setStoned = false', () => {
  const daemon = new Daemon();
  daemon.setStoned(false);
  daemon.setAttack(2);

  expect(daemon.getAttack()).toBe(4500);
});
