import angular from 'angular';

import buttonGroup from './btnGroup.component';

const buttonGroupModule = angular.module('app.btnGroup', []);

buttonGroupModule.component('btnGroup', buttonGroup);

export default buttonGroupModule;
