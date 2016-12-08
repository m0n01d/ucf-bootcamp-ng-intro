import angular from 'angular';

import addBtnModule from './addBtn';

const app = angular.module('app', [
  'app.addBtn',
]);

app.component('helloWorld', {
  template: `<add-btn></add-btn>`,
});
