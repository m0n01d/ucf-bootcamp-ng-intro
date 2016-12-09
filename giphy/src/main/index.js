import angular from 'angular';

import mainApp from './mainApp.component';

const mainAppModule = angular.module('app.main', []);

mainAppModule.component('mainApp', mainApp);

export default mainAppModule;
