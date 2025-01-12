import './styles.css'
import { ContextMenu } from './menu'
import { Timer } from './modules/timer.module';
import { ShapeModule } from './modules/shape-module/shape.module';
import { ColorPickerModule } from './modules/colorpicker-module/colorpicker-module';

const contextMenu = new ContextMenu();

const timer = new Timer('timer', 'Таймер отсчета')
const randomShape = new ShapeModule('randomShape', 'Случайная фигура')  
const colorpicker = new ColorPickerModule('colorpicker', 'Выбрать цвет фона');
contextMenu.add(timer)
contextMenu.add(randomShape)
contextMenu.add(colorpicker)

