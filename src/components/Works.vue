<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title class="headline">
          Works
        </v-card-title>
        <v-card-text>
          <p>
            作成したもの一覧
          </p>
        </v-card-text>
        <v-layout>
            <v-flex v-for="(product, i) in products" :key="i" d-flex md4>
              <v-card>
                <v-img :src="product.image" aspect-ratio="2.75"></v-img>
                <v-card-title class="headline">
                  {{ product.name }}
                </v-card-title>
                <v-card-text>
                  {{ product.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="secondary" :href="product.url" target="_blank">
                    詳細
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>  
      </v-card>    
    </v-flex>      
   </v-layout>       
 </template>

<script>
export default {
    data() {
        return{
             products:[
             {name: 'portfolio',
              description:'このサイト',
              url:'https://eager-tesla-d12a6f.netlify.app/'
             }

             ]
        }
    }
}
</script>
