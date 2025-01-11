import './styles.css'
import { ContextMenu } from './menu'
import { Timer } from './modules/timer.module';

const contextMenu = new ContextMenu();

const timer = new Timer('timer', 'Таймер отсчета')  
contextMenu.add(timer)

