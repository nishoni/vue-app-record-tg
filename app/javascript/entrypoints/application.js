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