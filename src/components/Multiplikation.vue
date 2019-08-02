<template>
<div>
<div class="addition">

<h1>Här räknar du multiplikation! öööö</h1>
<p>Thoho va kul!!!!</p>

<router-link class="linkstyle" to="/">
Hem
</router-link>




</div>



<Poang />

</div>
</template>

<script>
import Poang from './Poang.vue'


export default {
    name: 'Multiplikation',
    props: {
        msg: String
    },
    components: {
        Poang
    },
    created () {
            document.title = "Användare finns redan - EkoEnergiBörsen";
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
