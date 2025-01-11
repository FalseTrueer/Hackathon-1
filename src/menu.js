import { Menu } from './core/menu';
import { setMenuItem } from './utils';
import { ClicksModule } from './modules/clicks.module';
import { MessagesModule } from './modules/message.module';

export class ContextMenu extends Menu {
  #menu;

  constructor(selector) {
    super(selector);
    this.#menu = document.querySelector('.menu');
    this.open();
    this.close();
    this.add();
  }

  open() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.#menu.classList.add('open');
      this.#menu.style.left = `${event.pageX}px`;
      this.#menu.style.top = `${event.pageY}px`;
    });
  }

  close() {
    document.addEventListener('click', () => {
      this.#menu.classList.remove('open');
    });
  }

  add() {
    const clicksModule = new ClicksModule('click', 'Считать клики (за 3 секунды)');
    setMenuItem(this.#menu, clicksModule);

    const messagesModule = new MessagesModule('message', 'Кастомное сообщение');
    setMenuItem(this.#menu, messagesModule);
  }
}
