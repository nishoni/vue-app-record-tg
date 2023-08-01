// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const app = createApp({  
  data() {  
    return {  
      course: 'Intro to Vue 3 and Rails'  
    }  
  }  
})  
  
app.mount('#app');  
console.log("app", app);
console.log('hi');  