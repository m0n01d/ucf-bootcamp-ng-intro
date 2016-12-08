import angular from 'angular';

import mainApp from './mainApp.component';
import routeConfig from './mainApp.config';

var mainModule = angular.module('app.main', []);

mainModule.component('mainApp', mainApp);
mainModule.config(routeConfig);

export default mainModule;
