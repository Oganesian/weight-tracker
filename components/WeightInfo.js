

app.component('weight-info', {
  props: {
    isActual: {
      type: Boolean,
      required: true
    },
    weight: {
      type: Number,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="weight-info"
          :class="{ 'float-left': isActual, 'float-right': !isActual }">
      <p class="weight-title">{{ isActual ? 'Actual weight' : 'Desired weight' }}</p>
      <h2 :class="{ 'red-text': isActual, 'green-text': !isActual }">{{ weight }}</h2>
      <p class="kg">kg</p>
    </div>`,
  data() {
    return {
    }
  },
})