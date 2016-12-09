var GifsService = function($http) {
  var api_key = 'dc6zaTOxFJmzC';
  var url = 'http://api.giphy.com/v1/gifs/search';

  return {
    fetch: function(q) {
      return $http({
        method: 'GET',
        params: {
          api_key,
          q,
        },
        url,
      });
    },
  };
};

export default GifsService;
