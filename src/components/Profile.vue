<template>
    <div>
    <h1>私のプロフィール</h1>
    <h2>簡単な経歴</h2>
    <ul>
        <li>{{number1}}:{{message1}}</li>
        <li>{{number2}}:{{message2}}</li>
        <li>{{number3}}:{{message3}}</li>
    </ul>
    </div>
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
            message4: "",
        }
    }
}
</script>
