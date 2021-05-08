import {exportModule} from '@clux/react-web';
import main from './views/Main';
import {ModuleHandlers} from './model';

export default exportModule('mainLayout', ModuleHandlers, {main});
