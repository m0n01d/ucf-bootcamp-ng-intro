import angular from 'angular';
import servicesModule from './services';
import addBtnModule from './addBtn';

const app = angular.module('app', [
  'app.services',
  'app.addBtn',
]);

app.component('helloWorld', {
  template: `
    <add-btn></add-btn>
  `,
});
