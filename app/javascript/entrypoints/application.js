import { createApp } from 'vue/dist/vue.esm-bundler'

const app = createApp({
  data() {
    console.log('here')
    return {
      count: 0,
      dynamicId: 23
    }
  }
})

app.mount('#app')
