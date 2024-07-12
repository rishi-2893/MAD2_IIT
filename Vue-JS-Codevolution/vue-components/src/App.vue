<template>
  <GreetMessage name="Bruce" />
  <GreetMessage name="Jetha" />
  <GreetMessage :name="name" />
  <hr />
  

  <ArticleComponent id="article-1" title="Article 1" :likes="50" :isPublished="true"/>
  <hr />


  <PopupComponent v-show="showPopup" @closePopup="showPopup = false"/>
  <button @click="showPopup = true" v-if="!showPopup">Show Popup</button>
  <hr />
  

  <InputComponent v-model="modelValue" />
  <hr />


  <!-- THIS SYNTAX IS USED FOR UNNAMED SLOTS -->
  <CardComponent>
    <h2>I am adding h2 inside a Component using <em>slot</em>!</h2>
  </CardComponent>
  <CardComponent>
    <img src="https://picsum.photos/200" />
  </CardComponent>
  <hr />
  
  
  <!-- USE BELOW SYNTAX NAMED SLOTS -->
  <CardComponent>
    <template v-slot:header> <h2>Header</h2></template>
    <template v-slot:default><h2>Default</h2></template>
    <template v-slot:footer><h2>Footer</h2></template>
  </CardComponent>
  <hr />



  <NameListComponent>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} | {{ slotProps.lastName }}
    </template>
  </NameListComponent>
  <hr />


  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>
  <component :is="activeTab" />
  
  <!-- <TabA v-if="activeTab === 'TabA'"/>
  <TabB v-if="activeTab === 'TabB'"/>
  <TabC v-if="activeTab === 'TabC'"/> -->
  <hr />
  
  <teleport to="#portal-root">
  <PortalComponent />
</teleport>
  <hr />
</template>

<script>
import GreetMessage from './components/Greet.vue'
import ArticleComponent from './components/Article.vue'
import PopupComponent from './components/Popup.vue'
import InputComponent from './components/Input.vue'
import CardComponent from './components/Card.vue'
import NameListComponent from './components/NameList.vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'
import PortalComponent from './components/Portal.vue'

export default {
  name: 'App',
  data: function(){
    return{
      name: 'Rishi',
      showPopup: false,
      modelValue: '',
      activeTab: 'TabA',
    }
  },
  components:{
    GreetMessage,
    ArticleComponent,
    PopupComponent,
    InputComponent,
    CardComponent,
    NameListComponent,
    TabA,
    TabB,
    TabC,
    PortalComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
