import angular from 'angular';

import GifsService from './Gifs.service';

var servicesModule = angular.module('app.services', []);

servicesModule.factory('GifsService', GifsService);

export default servicesModule;
