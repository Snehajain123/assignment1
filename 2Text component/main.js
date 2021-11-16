const app = Vue.createApp({})

app.component('text-component', {
	props: ['title'],
  template: `<h4>{{ title }}</h4>`
})
