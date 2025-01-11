import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { MessagesModule } from './modules/message-module/message.module';
import { Timer } from './modules/timer-module/timer.module';
import { ShapeModule } from './modules/shape-module/shape.module';
import { BackgroundModule } from './modules/background-module/background.module';

const contextMenu = new ContextMenu();

const timer = new Timer('timer', 'Таймер отсчета')
const randomShape = new ShapeModule('randomShape', 'Случайная фигура')  
const backgorundCl = new BackgroundModule('background','Поменять цвет фона')
const clicksModule = new ClicksModule('click', 'Считать клики (за 3 секунды)');
const messagesModule = new MessagesModule('message', 'Кастомное сообщение');
contextMenu.add(timer)
contextMenu.add(randomShape)
contextMenu.add(backgorundCl)

