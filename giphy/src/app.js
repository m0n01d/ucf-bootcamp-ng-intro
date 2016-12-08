import angular from 'angular';
import 'angular-ui-router';
import servicesModule from './services';
import addBtnModule from './addBtn';
import mainModule from './main';
import buttonGroupModule from './btnGroup';
import gifsListModule from './gifsList';

const app = angular.module('app', [
  'ui.router',
  'app.services',
  'app.addBtn',
  'app.main',
  'app.btnGroup',
  'app.gifsList',
]);
