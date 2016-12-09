var mainApp = {
  template: `
    <div>
      <p>add a topic: </p>
      <add-btn
        handle-key-up="$ctrl.addBtn($event)">
      </add-btn>
      <btn-group
        topics="$ctrl.topics">
      </btn-group>
    </div>
  `,
  controller: function() {
    this.$onInit = function() {
      this.topics = [
        'trump',
        'hillary',
        'obama',
        'pence',
      ];
    };

    this.addBtn = function($event) {
      var topic = $event.topic;
      this.topics.push(topic);

      console.log(this.topics);
    };
  },
};

export default mainApp;