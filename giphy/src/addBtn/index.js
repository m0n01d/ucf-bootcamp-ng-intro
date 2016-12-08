import angular from 'angular';
// var angular = require('angular');

import addBtn from './addBtn.component';

const addBtnModule = angular.module('app.addBtn', []);

addBtnModule.component('addBtn', addBtn);

export default addBtnModule;
