var gifsList = {
  bindings: {
    gifs: '<',
  },
  require: {
    parent: '^^mainApp',
  },
  controller: function() {
    console.log(this.parent);
    this.$onInit = function() {
      console.log(this.parent);
    };
  },
  template: `
    <div id="gifs">
      <div
        class="gif"
        ng-repeat="gif in $ctrl.gifs"
        ng-click="$ctrl.parent.toggleGif({gif: gif})"
        >
          <img
            class="gif__img"
            ng-if="gif.playing"
            ng-src="{{gif.original}}">
          <img
            class="gif__img"
            ng-if="!gif.playing"
            ng-src="{{gif.still}}">
      </div>
    </div>
  `
}

export default gifsList;
