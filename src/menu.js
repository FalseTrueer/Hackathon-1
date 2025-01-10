import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  #menu

   constructor(selector) {
     super(selector);
     if(document.querySelector('.menu-item')){
      this.open();
      this.close();

      this.#menu = document.querySelector('.menu');
     }
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
    const menuItem = document.createElement('li')

    menuItem.className = 'menu-item'
    menuItem.innerText = module.name

    this.#menu.append(menuItem)

    menuItem.addEventListener('click', module.trigger)
  }
}
