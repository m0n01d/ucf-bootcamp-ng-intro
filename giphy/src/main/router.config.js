export default function routeConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/',
      component: 'mainApp',
    })
    .state('app.gifs', {
      url: 'gifs/:topic',
      component: 'gifsList',
      resolve: {
        gifs: function(GifsService, $stateParams) {
          var topic = $stateParams.topic;
          return GifsService.fetch(topic)
          .then(res => {
            var resGifs = res.data.data;
            const gifs = resGifs.map(function(gif) {
              var original = gif.images.original.url;
              var still = gif.images.original_still.url;
              var rating = gif.rating;
              var playing = false;
              return {
                original,
                still,
                rating,
                playing,
              };
            });
            return gifs;
          });
        },
      }
    });

  $urlRouterProvider.otherwise('/');
}
