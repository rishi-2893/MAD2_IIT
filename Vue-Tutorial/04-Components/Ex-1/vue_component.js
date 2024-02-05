/**
 * Create component using following syntax
 * Vue.component('nameofthecomponent',{ // options});
 * Once a component is created, the name of the component becomes the custom
 * element and the same can be used in the Vue instance element created
 */
Vue.component("testcomponent", {
  template: "<div><h1>This is coming from component</h1></div>",
});

// Below instances two are required for the above component
let vm = new Vue({
  el: "#component_test",
});
let vm1 = new Vue({
  el: "#component_test1",
});

// Local registration: components will be a part of only the vue instance created
let vm2 = new Vue({
  el: "#local_registration",
  components: {
    'local_registration': {
      template: "<div><h1>This is coming from local registration</h1></div>",
    }
  }
});