<template>
<v-container>
    <v-row>
    <v-col cols=4>   
    <v-btn @click="link"> 
    <v-icon color='#211F1F'>mdi-github</v-icon>
    </v-btn> 
    </v-col>
    <v-col cols=4>
    <v-btn @click="link2">
    <v-icon color="#1DA1F2"> mdi-twitter</v-icon>
   </v-btn>
    </v-col>
    <v-col cols=4>
    <v-btn @click="link3">
    <v-icon color="#f21de7">mdi-instagram</v-icon>
    </v-btn>    
    </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    methods: {
        link(){
            const url ='https://github.com/satoshi-nakao'
            window.open(url, '_blank')
        },
        link2(){
            const url ='https://twitter.com/ksQcRkD1DNl98WE'
            window.open(url, '_blank')
        },
        link3(){
            const url ='https://www.instagram.com/uzisubmachineguhand/'
            window.open(url, '_blank')
        }
    }
}
</script>