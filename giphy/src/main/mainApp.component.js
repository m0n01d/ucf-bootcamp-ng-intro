var mainApp = {
  template: `
    <div>
      <p>add a topic: </p>
      <add-btn
        handle-key-up="$ctrl.addBtn($event)"
      >
      </add-btn>
      <pre><code>{{$ctrl.topics | json}}</code></pre>
    </div>
  `,
  controller: function() {
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
    };

    this.addBtn = function($event) {
      console.log($event);
      var topic = $event.topic;

      this.topics.push(topic);
    };
  },
};

export default mainApp;
