Vue.component('message-board', {
    props: ["title"],
    template: `
    <div>
      <h3> {{ title }} </h3>
          <div class="form-group">
            <label for="vistor_name">Your Name</label>
            <input type="text" id="vistor_name" v-model="vistor_name" /> 
          </div>
          <div class="form-group">
            <label for="vistor_message">Your Message</label>
            <input type="text" id="vistor_message" v-model="vistor_message" /> 
          </div>
          <button v-on:click="sayHi">Say Hi</button>
        <ul>
            <li v-for="message in messages"> {{message['vistor_name']}} - {{message['vistor_message']}} </li>
        </ul>
    </div>
        `,
    data: function() {
        return {
            vistor_name: null,
            vistor_message: null,
            messages: []
        }
    },
    methods: {
        sayHi: function(name) {
            this.messages.push({
                "vistor_name": this.vistor_name,
                "vistor_message": this.vistor_message
            });
            this.vistor_name = "";
            this.vistor_message = "";
            this.$emit('add-to-grand-total');
        }
    },
    computed: {
        count: function() {
            return this.messages.length;
        }
    }

})


var app = new Vue({
    el: '#app',
    data: {
        grand_total: 0
    },
    methods: {
        add_grand_total: function() {
            console.log("in grand_total");
            this.grand_total = this.grand_total + 1;
        }
    },
    beforeCreate: function() {
        console.log("beforeCreate");
        console.log(this.grand_total);
    },
    created: function() {
        console.log("created");
        console.log(this.grand_total);
    },
    beforeMount: function() {
        console.log("beforeMount");
    },
    mounted: function() {
        console.log("mounted")
        console.log(this.$el)
    } 
})