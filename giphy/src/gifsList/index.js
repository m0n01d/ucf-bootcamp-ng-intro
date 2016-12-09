import angular from 'angular';

import gifsList from './gifsList.component';

const gifsListModule = angular.module('app.gifsList', []);

gifsListModule.component('gifsList', gifsList);

export default gifsListModule;
