var addBtn = {
  template: `
    <div>
      <input
        ng-model="$ctrl.topic"
        ng-keyup="$ctrl._handleKeyUp($event)"/>
    </div>
  `,
  bindings: {
    handleKeyUp: '&',
  },
  controller: function() {
    this.$onInit = function(){
      this.topic = '';
    };

    this._handleKeyUp = function($event) {
      if ($event.which === 13) {
        this.handleKeyUp({ //addBtn
          $event: {
            topic: this.topic,
          },
        });
        this.topic = '';
      }
    }
  },
};

export default addBtn;
