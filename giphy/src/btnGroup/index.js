import angular from 'angular';

import btnGroup from './btnGroup.component';

const buttonGroupModule = angular.module('app.btnGroup', []);

buttonGroupModule.component('btnGroup', btnGroup);

export default buttonGroupModule;
