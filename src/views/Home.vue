<template>
    
     <!-- <router-link to="skil">Skil</router-link>
     <router-link to="works">Works</router-link> -->
     <v-layout  justify-center align-center>
      <v-flex sm6 md6>  
     <div class="display-3">
         Welcome to My Profile
     </div>
     <v-divider class="my-3"></v-divider>
     <div class="title mb-3">Check out my profile</div>
     <v-layout justify-center>
     <!--こっちにrouter-linkの内容を表示させる-->
      <v-btn color="primary" large to="/profile">profile</v-btn>
      
     </v-layout>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
    
}
</script>

<style>
.title{
    font-size: 120px;
}
</style>