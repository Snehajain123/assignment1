const app = Vue.createApp({})

app.component('custom-input', {
  props: ['modelValue', 'placeholder'],
  emits: ['Update:modelValue'],
  template: `
    <input
      :value="modelValue"
      :placeholder="placeholderValue"
      @input="$emit('Update:modelValue', $event.target.value)"
    >
    <review-form @review-submitted="addReview"></review-form>
    <review-list :reviews="reviews"></review-list>
  `,
  data() {
    return {
      placeholderValue: 'hello',
      reviews: []
    }
 },
 methods: {
    addReview(review) {
      this.reviews.push(review)
    }
  },
}),

app.component('input-component', {
  
})

