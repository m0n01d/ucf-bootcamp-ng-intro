import angular from 'angular';

import mainApp from './mainApp.component';
import routerConfig from './router.config';

const mainAppModule = angular.module('app.main', []);

mainAppModule.component('mainApp', mainApp);
mainAppModule.config(routerConfig);

export default mainAppModule;
