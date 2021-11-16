const app = Vue.createApp({
   data() {
    return {
      message: ''
    }
  }
})

app.component('custom-input', {
  props: ['modelValue', 'placeholder'],
  emits: ['Update:modelValue'],
  template: `
    <input
      :value="modelValue"
      :placeholder="placeholderValue"
      @input="$emit('Update:modelValue', $event.target.value)"
    >
  `,
  data() {
    return {
      placeholderValue: 'hello'
    }

  }
})
