var mainApp = {
  template: `
    <div>
      <p>add a topic: </p>
      <add-btn
        handle-key-up="$ctrl.addBtn($event)"
      >
      </add-btn>
      <btn-group
        topics="$ctrl.topics">
      </btn-group>
      <gifs-list
        gifs="$ctrl.gifs">
      </gifs-list>
      <pre><code>{{$ctrl.gifs | json}}</code></pre>
    </div>
  `,
  controller: function(GifsService) {
    this.$onInit = function() {
      this.topics = [
        'frozen',
        'little mermaid',
        'shrek',
        'bee movie',
        'jaws',
        'starship troopers',
        'fight club',
        'up',
      ];

      this.gifs = [];

      this.fetchGifs({topic: 'tarzan'})
    };

    this.addBtn = function($event) {
      console.log($event);
      var topic = $event.topic;

      this.topics.push(topic);
    };

    this.fetchGifs = function($event) {
      console.log($event);
      var topic = $event.topic;
      GifsService.fetch(topic)
      .then(function(res) {
        return res.data.data.map(function(gif) {
          var original = gif.images.original.url;
          var still = gif.images.original_still.url;
          var rating = gif.rating;
          var playing = false;
          return {
            original,
            still,
            playing,
            rating,
          };
        });
      })
      .then((gifs) => {
        console.log('what am i', this);
        this.gifs = gifs;
      });
    }
  },
};

export default mainApp;
