export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function setMenuItem(menu, module) {
  const menuItem = new DOMParser().parseFromString(module.toHTML(), 'text/html')
    .body.firstChild;

  menu.appendChild(menuItem);
  menuItem.addEventListener('click', module.trigger.bind(module));
}
