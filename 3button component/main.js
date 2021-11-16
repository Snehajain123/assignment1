const app = Vue.createApp({
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue'},
        { id: 2, title: 'Blogging with Vue'},
        { id: 3, title: 'welcome to the world'}
      ],
      postFontSize: 1
    }
  }
})

app.component('button-component', {
  props: ['title'],
  template: `
    <div>
      <h4>{{ title }}</h4>
      <button @click="$emit('enlargeText')">
        Enlarge text
      </button>
    </div>
  `
})
