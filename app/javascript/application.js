// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({  
  data() {
    console.log('here');
    return {
      course: 'Intro to Vue 3 and Rails'  
    }  
  }  
})  
  
app.mount('#app');  
console.log("app", app);