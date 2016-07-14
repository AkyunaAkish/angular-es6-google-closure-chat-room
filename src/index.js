import angular from 'angular'
import 'angular-ui-router'

import io from 'socket.io-client'

const socket = io.connect()

import './sass/style.scss'

import HomeController from './controllers/home_controller.js'
import HomeDirective from './directives/home_directive.js'
import Routes from './routes/routes.js'

angular.module('app', ['ui.router'])
.controller('HomeController', HomeController)
.directive('homeDirective', HomeDirective)
.config(Routes)
