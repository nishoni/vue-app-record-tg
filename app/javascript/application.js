// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import Vue from 'vue'
import MyComponent from '../components/MyComponent.vue'

Vue.component('my-component', MyComponent)