# Intro

#### instructor notes
 + activities are bolded, name matches folder name

Angular.js is a full frontend javascript framework for building single page applications. It handles templating, ajax requests and theres even modules for routing.

You can build a whole application with just angular.js. You can also leverage your existing jquery knowledge using custom directives, as angular.js comes with [jqLite](https://docs.angularjs.org/api/ng/function/angular.element), a subset of jquery's api. If you want/need you can include jquery, just load it before you load angular.js.


## set up
  // @TODO


## Getting Started

  + open **hello world**

  The `angular.module` method on line 16 is a global place for creating, registering and retrieving Angular modules

  + passing 1 argument to `angular.module('app')` retrives the module
  + passing 2 arugments to
    + `angular.module('app', [])` or
    + `angular.module('app', ['someModule', 'someOtherModule'])`
    + creates a module, the second argument is a list of modules to require (inject)

  notice line: 2, `ng-app="app"`.

  `ng-app` is a directive, and its value `"app"` is the name of our `'app'` module, declared on line `15`

  this gives our `'app'` component access to just about every element on the page, even the `<head>`

  `ng-app` is sort of like what we saw with `ReactDOM.render`
  We'll talk more about directives later

  the name of our component `myComponent` is defined using `camelCase`, but when rendered in html it becomes `kebab-case`

  Right now `myComponent` doesn't do much, nor is it very reusable

  + open **hello props**

  you'll notice on line 10, we're passing in `"Class"` as a property/attribute called `title`. On line line 22 in our template, we use angular's interpolation syntax, two `{{}}` to render out our title inside of our template. Here, `$ctrl` refers to our component itself (its `this`). Our component has a property called `title`, passed in through its `bindings`

  the `'@'` tells our component to expect  our `title` property as a `"string"`


  + *students* extend **hello props**

    + add a second property to `bindings`, and render it
    + ```javascript
      bindings: {
        title: '@',
        message: '@',
      },
      template: '<p>Hello {{$ctrl.title}}! {{$ctrl.message}}</p>',

      ```
      ```html
      <my-component title="Students" message="angular is awesome"></my-component>
      ```
    + now anywhere we need a `my-component` we can drop it in and pass it props
    * having 1 `my-component` is fine, but what if we wanted to render a bunch of them, and not manually copy paste them. useful for rendering arrays of data


#### ng-repeat
+ open **repeater**

  + we've refactored `myComponent` to take a list of titles to render,
  ```javascript
    bindings: {
      titles: '<',
    }
  ```
  + the `'<'` binding tells our component to expect data
  + through our `myParent` component we pass its child `my-component` it's list of `people`, all of whom have a `title` attribute

  + `myComponent` uses the `ng-repeat` directive to loop over each object in its `titles` array binding, printing out each `title`, where `message` in `message in $ctrl.titles` refers to the current message in the iteration

  + .components() in angular have lifecycle hooks,
    + `$onInit` is for initialization

  + more on lifecycle hooks [Todd Motto's article](https://toddmotto.com/angular-1-5-lifecycle-hooks)
