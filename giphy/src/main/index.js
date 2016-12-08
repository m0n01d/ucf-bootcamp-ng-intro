import angular from 'angular';

import mainApp from './mainApp.component';

var mainModule = angular.module('app.main', []);

mainModule.component('mainApp', mainApp);

export default mainModule;
