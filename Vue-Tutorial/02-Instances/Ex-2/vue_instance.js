let vm = new Vue({ // vm is the instance of Vue
  el: "#vue_det", // Element id
  data: {
    firstname: "Ria",
    lastname: "Singh",
    address: "Mumbai",
  },
  methods: {
    mydetails: function () {
      return "I am " + this.firstname + " " + this.lastname;
    },
  },
});

console.log(vm.$data); // prints the full object
console.log(vm.$data.firstname); // prints Ria