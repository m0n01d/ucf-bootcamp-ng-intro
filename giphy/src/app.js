import angular from 'angular';

import addBtnModule from './addBtn';
import mainAppModule from './main';
import buttonGroupModule from './btnGroup';

const app = angular.module('app', [
  'app.addBtn',
  'app.main',
  'app.btnGroup',
]);

app.component('helloWorld', {
  template: `<main-app></main-app>`,
});
