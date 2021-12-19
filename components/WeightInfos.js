app.component('weight-infos', {
  template: 
  /*html*/
  `<div class="weight-infos">
    <weight-info :isActual="true" :weight="99"></weight-info>
    <weight-info :isActual="false" :weight="85"></weight-info>
  </div>
  `,
  data() {
    return {
      actualWeight: 0,
      desiredWeight: 0
    }
  },
})