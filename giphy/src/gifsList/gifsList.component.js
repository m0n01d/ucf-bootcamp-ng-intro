var gifsList = {
  bindings: {
    gifs: '<',
  },
  controller: function() {

  },
  template: `
    <div id="gifs">
      <div
        class="gif"
        ng-repeat="gif in $ctrl.gifs"
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
