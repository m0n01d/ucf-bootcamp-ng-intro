import angular from 'angular';

import GifsService from './gifs.service';

const servicesModule = angular.module('app.services', []);

servicesModule.factory('GifsService', GifsService);

export default servicesModule;
