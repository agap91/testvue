import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import TopPanel from './TopPanel.vue'

Vue.use(VueRouter);
Vue.component('app-top-pannel', TopPanel)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data() {
    return {
      y: 0
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function (evt, el) {
      let newY = window.pageYOffset;
      if (newY > 0) {
        if (newY < this.y) {
          document.querySelector(".top-panel").classList.add("show");
          document.querySelector("body").classList.remove("p0");
          this.y = window.pageYOffset;
        } else {
          document.querySelector(".top-panel").classList.remove("show");
          document.querySelector("body").classList.add("p0");
          this.y = window.pageYOffset;
        }
      }
    }
  }
})
