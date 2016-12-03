# Intro

#### instructor notes
 + activities are bolded, name matches folder name

Angular.js is a full frontend javascript framework for building single page applications. It handles templating, ajax requests and theres even modules for routing.

You can build a whole application with just angular.js. You can also leverage your existing jquery knowledge using custom directives, as angular.js comes with [jqLite](https://docs.angularjs.org/api/ng/function/angular.element), a subset of jquery's api. If you want/need you can include jquery, just load it before you load angular.js.


## set up
  // @TODO


## Getting Started

### open **hello world**

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

### open **hello props**

  you'll notice on line 10, we're passing in `"Class"` as a property/attribute called `title`. On line line 22 in our template, we use angular's interpolation syntax, two `{{}}` to render out our title inside of our template. Here, `$ctrl` refers to our component itself (its `this`). Our component has a property called `title`, passed in through its `bindings`

  the `'@'` tells our component to expect  our `title` property as a `"string"`


### *students* extend **hello props**

  + add a second property to `bindings`, and render it
  ```javascript

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

### open **repeater**

  + we've refactored `myComponent` to take a list of titles to render,
  ```javascript

    bindings: {
      titles: '<',
    },
    template: '<p ng-repeat="message in $ctrl.titles">Hello {{message.title}}!</p>',

  ```
  + the `'<'` binding tells our component to expect data
  + through our `myParent` component we pass its child `my-component` it's list of `people`, all of whom have a `title` attribute

  + `myComponent` uses the `ng-repeat` directive to loop over each object in its `titles` array binding, printing out each `title`, where `message` in `message in $ctrl.titles` refers to the current message (object) in the iteration

  + .components() in angular have lifecycle hooks,
    + `$onInit` is for initialization

  + more on lifecycle hooks [Todd Motto's article](https://toddmotto.com/angular-1-5-lifecycle-hooks)


#### directives

now that we've used directives, lets look at what they are, and what they do

* what is a directive?
   * wikipedia
    + In computer programming, a directive pragma (from "pragmatic") is a language construct that specifies how a compiler (or assembler or interpreter) should process its input.

  * angular docs
   * "At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler (`$compile`) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children." [angular docs](https://docs.angularjs.org/guide/directive)

you can use it to add event listeners like `ng-click` adds a click handler (surprise), or `ng-change` listens for a change even on an input, etc

angular has built in directives, for adding behavior to your app
`ng-model` on an `<input ng-model="$ctrl.foo" />` will update the value of our model `$ctrl.foo`  

`ng-model` sets up two-way databinding between our view and model

```javascript
  const myApp = {
    template: `
      <input ng-model="$ctrl.foo" type="text">
      <p>my model says: {{$ctrl.foo}}</p>
    `,
    controller: function() {
      this.$onInit = function() {
        this.foo = 'Hello World';
      };
    }
  };
```

Angular lets you create your own directives, with `.directive()` method

Directives are great (and should be reserved) for DOM manipulation

If you need to add behavior that doesn't come built in with angular, you can create your own directive to handle that action/feature

for instance, there is no built in handler for `<input type="file" />` like there is for `type="text"`

```javascript
  const myInput = function() {
    return {
      restrict: 'E', //E says we use a custom element
      //restrict: 'A', says use an attribute '<div my-input/>'
      //restrict:'AE', either
      template: `
        <input type="file" />
      `,
      scope: {
        onChange: '=',
      },
      link: function(scope, el, attrs) {
        el.on('change', function(event) {
          console.log('my files::', event.target.files);

          scope.onChange({ //delegate handling of our files to a parent
            $event: {
              files: event.target.files
            }
          });
        });
      }
    };
  }

  app.directive('myInput', myInput);


  // then in the template for a parent .component()

  const parentComponent = {
    //....
    template: `
      <p>my cool app</p>
      <div>
        <my-input
          on-change="$ctrl.uploadCatPicsToServer($event)">
        </my-input>
      </div>
    `,
    controller: function() {
      this.uploadCatPicsToServer = function($event) {
        var files = $event.files;
        // ajax request with files.....
      };
    }
  };

```



or if you need/want to wrap a jquery plugin for use with angular

```javascript

  var myCarousel = function() {
    return {
      template: `
      <div class="item">
        <img src="..." alt="...">
        <div class="carousel-caption">
          <h3>...</h3>
          <p>...</p>
        </div>
      </div>
      `,
      link: function(scope, el, attrs) {
        // el is basically a jQuery wrapped object
        // $(el)
        el.on('slide.bs.carousel', function () {
          // do something…
        });
        /*
        $('#myCarousel').on('slide.bs.carousel', function () {
          // do something…
        })
        */

        el.carousel({
          interval: 2000
        });


      }
    }
  };

  app.directive('myCarousel', myCarousel);
```

when using `restrict` property

```
When should I use an attribute versus an element?

Use an element when you are creating a component that is in control of the template.

The common case for this is when you are creating a Domain-Specific Language for parts of your template.

Use an attribute when you are decorating an existing element with new functionality.
```

`ng-click` is probably the most common directives

it evaluates an expression when that element is clicked

```javascript
  const myApp = {
    template: `
      <button ng-click="$ctrl.count += 1">
        Button was clicked {{$ctrl.count}} times
      </button>
    `,
    controller: class BtnCounter {
      $onInit() {
        this.count = 0;
      }
    }
  }

  // can also call methods

  const myApp = {
    template: `
      <button
        ng-class="$ctrl.count  % 2 ? 'odd' : 'even'"
        ng-click="$ctrl.increment()">
        Button was clicked {{$ctrl.count}} times
      </button>
    `,
    controller: class BtnCounter {
      $onInit() {
        this.count = 0;
      }

      increment() {
        this.count += 1;
      }
    }
  }
```

in the second example, we added `ng-class` which is a directive that can add a class or classes to an element, based on the expression

here its using a ternary operator to check if the `$ctrl.count` property is even, if so add the `.even` class, otherwise add `.odd`


#### dependency injection

angular comes with many "services"

* Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.

* Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.

* Note: Like other core Angular identifiers, built-in services always start with $ (e.g. $http).


one use of services is to share state across pages, components or routes

dependency injection makes it trivial to modularize your




```javascript
// app.js
import angular from 'angular';

import auth from 'modules/auth';
import bazModule from 'modules/baz';

angular.module('app', ['auth', 'baz']);



// auth module

var auth = angular.module('auth', []);

var UserService = auth.factory('UserService', function($http) {
  var currentUser = {};

  return {
    get: function() {
      return $http.get('/path/to/api/user')
    },
    isAuth: function() {
      return currentUser && currentUser.id;
    },
    logOut: function() {
      currentUser = {};
    },
    login: function(credentials) {
      return $http.post('/path/to/api/user', credentials)
        .then(function(user) {
          return angular.extend(currentUser, user);
        });
    },
    getCurrentUser: function() {
      return currentUser;
    }
  }
});


// baz module

var baz = angular.module('baz', []);

var bazComponent = {
  template: `
    <div>{{$ctrl.currentUser.email}}</div>
  `,
  controller: function(UserService) {
    this.currentUser = UserService.getCurrentUser();
  }
}

```

`UserService` is a custom service injected into (required by) `bazComponent`

`$http` that is injected into our `UserService` is a built-in service that is injected into `UserService`

Services are singletons

they are created once and passed around to wherever they are required


* if you look into the docs on Services, youll see that there are 3 "services"

  * `.factory`
  * `.service`
  * `.provider`

`.factory` injects the `return` value from the function
`.service` injects an instance of the function
`.provider` ?
