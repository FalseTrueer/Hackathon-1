import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { MessagesModule } from './modules/message-module/message.module';

const contextMenu = new ContextMenu();

const clicksModule = new ClicksModule('click', 'Считать клики (за 3 секунды)');
const messagesModule = new MessagesModule('message', 'Кастомное сообщение');

contextMenu.add(clicksModule);
contextMenu.add(messagesModule);
