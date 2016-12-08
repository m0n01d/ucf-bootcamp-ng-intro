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
      <div ui-view />
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
    };

    this.addBtn = function($event) {
      console.log($event);
      var topic = $event.topic;

      this.topics.push(topic);
    };
  },
};

export default mainApp;
