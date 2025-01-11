import { Module } from '../core/module';

export class ClicksModule extends Module {
  trigger() {
    let counterClicks = 0;
    document.addEventListener('click', () => {
      counterClicks++;
    });
    setTimeout(() => {
      alert(`Количество кликов за 3 секунды - ${counterClicks}`);
    }, 1500);
  }
}