<template>

<div class="helsida">

<h1>Här räknar du plus! yuyu</h1>
<p>Thoho va kul!!!!</p>

<router-link class="linkstyle" to="/">
Hem
</router-link>


<!--Poang /-->

<DigitalDigit />
</div>






</template>

<script>
//import Poang from './Poang.vue'
import DigitalDigit from './DigitalDigit.vue'

export default {
    name: 'Addition',
    props: {
        msg: String,

    },
    components: {
        //Poang
        DigitalDigit
    },

    created () {
            document.title = "Addition";
            this.$session.set("aktuelltNummer", 47);
            /*digitalNumber.value = 35;*/
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helsida {

    margin-top: 0;
    height: 100%;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
    color: white;
}
.om {
    margin:auto;
    width:60%;
    min-height: 70vh;
}
.innerwrap {
    text-align:left;
}
.fotnot {
    text-align: left;
    bottom: 1em;
    left:0px;
    color: black;
}
.linkstyle {
    text-decoration: none;
    color: black;
}
.linkstyle:hover {
    color: white;
}






</style>
