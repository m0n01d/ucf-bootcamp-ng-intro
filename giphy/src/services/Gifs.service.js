

var key = 'dc6zaTOxFJmzC';
var giphy = 'http://api.giphy.com/v1/gifs/search';


var GifsService = function($http) {
  return {
    fetch: function(topic) {
      return $http({
        method: 'GET',
        url: giphy,
        params: {
          api_key: key,
          q: topic,
        }
      });
    },
  };
};

export default GifsService;
