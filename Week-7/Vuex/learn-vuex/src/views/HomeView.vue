<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{  $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style>
.counter {
  font-size: 80px;
}
.buttons button{
  font-size: 80px;
  width: 200px;
  height: 200px;
  margin: 0 10px;
}
</style>
