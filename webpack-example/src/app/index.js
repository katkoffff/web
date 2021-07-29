//src/app/index.js
/*class TestClass {
    constructor() {
        let msg = "Using your mind";
        console.log(msg);
    }
}
let test = new TestClass();*/

import '../style/app.scss';
import angular from 'angular';
import template from './index.tpl.html';
let component = {
    template // Use ES6 enhanced object literals.
}
let app = angular.module('app', [])
    .component('app', component)

console.log('API Key from Define Plugin:', API_KEY);
