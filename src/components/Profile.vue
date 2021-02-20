<template>
<v-container>
  <v-row>
    <v-col cols=6>
    <h1>Profile</h1>
    <h2>簡単な経歴</h2>
    <ul>
        <li>{{number1}}:{{message1}}</li>
        <li>{{number2}}:{{message2}}</li>
        <li>{{number3}}:{{message3}}</li>
    </ul>
    <h2>プロフィール</h2>
    <ul>
        <li>{{ profile1}}:{{text1}}</li>
        <li>{{ profile2}}:{{text2}}</li>
        <li>{{ profile3}}:{{text3}}</li>
        <li>{{ profile4}}:{{text4}}</li>
    </ul>
    </v-col>
    <!-- <div class="gazou"> -->
        <!-- <img src="@/assets/nakano3.jpg"> -->
        <!-- <v-layout row wrap justify-center align-center>
        <v-flex md6> -->
    <v-col cols=6>
        <v-img 
        src="@/assets/nakano3.jpg"
        max-height="400"
        max-width="400"
        ></v-img>
    </v-col>
        
        
        
        
        
        
        
        <!-- </v-flex>
        </v-layout> -->
    <!-- </div> -->
    
  </v-row>
</v-container>
</template>

<script>
export default {
    data:function(){
        return{
            number1: 2019.3,
            number2: 2019.10,
            number3: 2021.2,
            message1: "IT業界に参入",
            message2: "現在の会社に転職(在職中)",
            message3: "ネットワーク機器の保守サポート業務を開始",
            profile1:"名前",
            profile2:"居住地",
            profile3:"生年月日",
            profile4:"趣味",
            text1:"Satoshi Nakao",
            text2:"東京都中野区",
            text3:"1992/01/06",
            text4:"街歩き、YouTube鑑賞、水泳",
        }
    }
}
</script>

