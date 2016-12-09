import angular from 'angular';
import 'angular-ui-router';

import addBtnModule from './addBtn';
import mainAppModule from './main';
import buttonGroupModule from './btnGroup';
import servicesModule from './services';
import gifsListModule from './gifsList';

const app = angular.module('app', [
  'ui.router',
  'app.addBtn',
  'app.main',
  'app.btnGroup',
  'app.services',
  'app.gifsList',
]);
