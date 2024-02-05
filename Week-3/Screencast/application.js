var app = new Vue({
  el: '#app',
  data: {
    message: "Hello World",
    vistor_name: null,
    names: [],
    buttonStyle:"btn btn-primary"
  },
  methods: {
    sayHi: function (name) {
      this.message = " hi ";
      this.names.push(this.vistor_name);
      this.vistor_name = "";
      this.buttonStyle = "btn btn-success"
    }
  },
  computed : {
      count: function(){
          return this.names.length;
      }
  }    
})
