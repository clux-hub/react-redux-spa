import {BaseModuleState, BaseModuleHandlers} from '@clux/react-web';
import {APPState} from '@/APP';

export interface ModuleState extends BaseModuleState {}

export class ModuleHandlers extends BaseModuleHandlers<ModuleState, APPState> {
  constructor() {
    super({});
  }
}
