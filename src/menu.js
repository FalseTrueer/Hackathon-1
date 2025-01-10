  import { Menu } from './core/menu';

  export class ContextMenu extends Menu {
    #menu

    constructor(selector) {
      super(selector);
      this.#menu = document.querySelector('.menu');
      this.open();
      this.close();
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

    add(module){
      const menuItem = new DOMParser().parseFromString(module.toHTML(), 'text/html').body.firstChild

      this.#menu.appendChild(menuItem)

      menuItem.addEventListener('click', module.trigger.bind(module))
    }
  }
