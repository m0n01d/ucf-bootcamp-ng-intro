var buttonGroup = {
  bindings: {
    topics: '<',
  },
  template: `
    <div class="btn-group">
      <a
        class="btn-group__btn"
        ng-repeat="topic in $ctrl.topics track by $index"
        >
          {{topic}}
      </a>
    </div>
  `
}

export default buttonGroup;
