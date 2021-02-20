<template>
    <v-app>
    <!-- <v-card> -->
    <!-- <v-navigation-drawer app v-model="drawer" clipped>Navigation Lists</v-navigation-drawer> -->
    <v-app-bar color="primary" fixed app dark clipped-left>
      <!-- <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
      
      <!-- <v-bth icon active-class>
      <v-img src='/assets/logo.png' aspect-ratio="1" />
      </v-bth> -->
      <!-- <v-toolbar-title >My Page</v-toolbar-title> -->
      <v-btn icon active-class :to="'/'">
      <v-img src="@/assets/nakano3.jpg" aspect-ratio="1">
      </v-img>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-tabs background-color="primary">
      <!-- <v-btn color="primary" v-for="item in items" :key="item" :to="item.to">{{ item.name }}</v-btn> -->
      <v-tab v-for="item in items" :key="item" :to="item.to">{{ item.name }}</v-tab>
      <!-- <v-tab>Works</v-tab>
      <v-tab>Skill</v-tab>
      <v-tab>Contact</v-tab> -->
      </v-tabs>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="primary" dark app>
      Vuetify
    </v-footer>
    <!-- </v-card> -->
  </v-app>
</template>


<script>
// import { component } from 'vue/types/umd'
// import Home from '~/views/Home.vue'

export default {
  // components:{
  //   Home
  // },
  data(){
    return{
      drawer: false,
      items: [
        {name: 'Profile',to: '/profile'},
        {name: 'Works',to: '/works'},
        {name: 'Skill',to: '/skill'},
        {name: 'Contact', to: '/contact'}
      ],
      title: "My Page"
    }
  }
}
</script>