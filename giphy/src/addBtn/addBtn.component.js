var addBtn = {
  bindings: {
    handleKeyUp: '&',
  },
  template: `
    <input
      ng-model="$ctrl.topic"
      ng-keyup="$ctrl._handleKeyUp($event)"
    />
  `,
  controller: function() {
    this.$onInit = function() {
      this.topic = '';
    };

    this._handleKeyUp = function($event) {
      if ($event.which === 13) {
        this.handleKeyUp({
          $event: {
            topic: this.topic,
          }
        });
        this.topic = '';
      }
    };
  }
};

export default addBtn;
