<template>
  <!-- BINDING TEXT -->
  <div>Hello {{ name }}</div>
  <div v-text="job"></div>
  <div v-html="college"></div>
  <hr />
  
  
  <!-- BINDING ATTRIBUTES -->
  <div v-bind:id="headingId">Heading</div>
  <button v-bind:disabled="isDisabled">Using vanilla v-bind</button>
  <h3 v-bind:class="isPromoted && 'promoted'">Using && operator</h3>
  <h3 v-bind:class="isPromoted ? 'promoted' : ''">Using ternary operator</h3>
  <h3 v-bind:class="['promoted', 'hit']">Classes can be assigned as list</h3>
  <h3 v-bind:class="[isPromoted ? 'promoted' : '', 'hit']">Array conditional
    class</h3>
    <h3 v-bind:class="{promoted: isPromoted, hit: true}">Object conditional
      class</h3>
      <h3 :style="{
        color: textColor,
      }">Inline style using v-bind</h3>
  <hr />
  
  
  <!-- CONDITIONAL RENDERING -->
  <h3 v-if="number === 0">The number is 0</h3>
  <h3 v-else-if="number > 0">The number is greater than 0</h3>
  <h3 v-else-if="number < 0">The number is less than 0</h3>
  <h3 v-else>Not a number</h3>
  <hr />
  
  
  <!-- INVISIBLE TEMPLATE FOR WRAPPING ELEMENTS -->
  <template v-if="showElement">
    <p>Template</p>
    <p>Template</p>
  </template>
  <hr />
  
  <!-- RENDERING LIST -->
  <h6 v-for="name in names" :key="name">{{ name }}</h6>
  <hr />
  
  
  <!-- METHODS -->
  <h3>add(30, 20) - {{ add(30, 20) }}</h3>
  <h3>multiply(30, 20) - {{ multiply(30, 20) }}</h3>
  <hr />
  
  <!-- HANDLING EVENTS -->
  <h3>{{ name }}</h3>
  <button v-on:click="name = 'batman'">Dude Mode</button>
  <h3>{{ counter }}</h3>
  <button v-on:click="counter+=1">Increment</button>
  <button @click="decrement(1)">Decrement</button>
  <button @click="decrement(100), changeName()">Change name and decrement by 100</button>
  <hr /> 
  

  <!-- FORMS  -->
  <form @submit="submitForm">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="formValues.name">
    <button>Submit</button>
  </form>
  <hr /> 
  
  
  <!-- COMPUTED PROPERTIES GETTER -->
  <h3>{{ fullName }} uses computed properties!</h3>
  <hr /> 
  

  <!-- COMPUTED PROPERTIES SETTER -->
  <h3>{{ fullNamePro }}</h3>
  <button @click="changeFullName">Change Full Name</button>
  <hr /> 
  

  <!-- WATCHER -->
  <h3>Current Volume(0-10): {{ volume }}</h3>
  <button @click="volume+=2">Increment</button>
  <button @click="volume-=2">Decrement</button>
  <hr /> 

</template>

<script>
export default {
  name: "App",
  data(){
    return{
      name: 'Rishi',
      job: 'Scare everyone',
      college: '<b>IIT Madras</b>',
      headingId: 'heading',
      isDisabled: true,
      isPromoted: true,
      textColor: 'green',
      number: 0,
      showElement: true,
      names: ['John', 'Jane', 'Jack'],
      counter: 0,
      firstName: 'Carlos',
      lastName: 'Sainz',
      formValues: {
        name: '',
      },
      volume: 0,
    }
  },
  methods: {
    add(a, b){
      return a + b
    },
    multiply(a, b){
      return a * b
    },
    decrement(num){
      this.counter -= num
    },
    changeName(){
      this.name = 'Multiple Event Handler'
    },
    submitForm(event){
      event.preventDefault() // prevents auto-refresh on submit
      alert(this.formValues.name)
    },
    changeFullName(){
      this.fullNamePro = 'John Doe'
    }
  },
  computed: {
    fullName(){
      // this.firstName = 'John' -- GIVES ERROR
      return `${this.firstName} ${this.lastName}`
    },
    fullNamePro:{
      get(){
        return `${this.firstName} ${this.lastName}`
      },
      set(value){
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch:{
    volume(newVal){
      if(newVal > 10){
        this.volume = 10
        alert('You cannot go above the ceiling!')
      }
      if(newVal < 0){
        this.volume = 0
        alert('You\'re tearing the ground!')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.promoted{
  color: red;
}

.hit{
  text-decoration: underline;
}
</style>
