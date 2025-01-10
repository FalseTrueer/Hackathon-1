import { Menu } from './core/menu';

export class ContextMenu extends Menu {
   constructor(selector) {
     super(selector);
     this.open();
     this.close();
   }
  open() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      const menu = document.querySelector('.menu');
      menu.classList.add('open');
      menu.style.left = `${event.pageX}px`;
      menu.style.top = `${event.pageY}px`;
    });
  }

  close() {
    document.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('open');
      });
  }
}
