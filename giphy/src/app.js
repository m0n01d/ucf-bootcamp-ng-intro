import angular from 'angular';

import addBtnModule from './addBtn';
import mainAppModule from './main';

const app = angular.module('app', [
  'app.addBtn',
  'app.main',
]);

app.component('helloWorld', {
  template: `<main-app></main-app>`,
});
