import angular from 'angular';
import servicesModule from './services';
import addBtnModule from './addBtn';
import mainModule from './main';

const app = angular.module('app', [
  'app.services',
  'app.addBtn',
  'app.main',
]);
