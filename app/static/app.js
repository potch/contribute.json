angular.module('contribute', [
    'ngRoute',
    'contribute.controllers'
])

.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    /*
     * With routeProvider there are two ways of pointing to a template using
     * the `templateUrl` option.
     * Either it's an actual HTTP GET URL like "/partials/examples.html"
     * Or it's an ID of a <script> tag that might look like this:
     * `<script type="text/ng-template" id="examples.html">`
     *
     * When to use which?
     * Having it all inline in the main index.html is good because it doesn't
     * require an additional HTTP GET just to download a tiny template.
     * However, it makes the main index.html fatter and if you suspect that
     * very few very rarely will need its content it might be best to just
     * leave it on the server and pull it in with a full AJAX URL.
     */
    $routeProvider
    .when('/examples', {
        templateUrl: 'examples.html',
        controller: 'ExamplesController'
    })
    .when('/what-is-this', {
        templateUrl: 'what-is-this.html',
        controller: 'WhatIsThisController'
    })
    .when('/:wildcard', {
        templateUrl: 'validation.html',
        controller: 'ValidationController'
    })
    .when('/', {
        templateUrl: 'validator.html',
        controller: 'ValidatorController'
    })
    ;
}])

;
