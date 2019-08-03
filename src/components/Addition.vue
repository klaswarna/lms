<template>

<div class="helsida">

<h1>Addition</h1>

<router-link class="linkstyle" to="/">
<i class="fa fa-home storre"></i>

</router-link>


<DigitalDigit :key="tillfalligpoang"/>

<div class="fragan">

{{tal1}} + {{tal2}} =

</div>



<div class="svaret">

<input type="number" id="svaret" ref="svaret">

</div>

<div id="svarsknapp" v-on:click="kollaSvar">
    SVARA
</div>


<div class="ratt" ref="ratt">
    RÄTT
</div>

<div class="fel" ref="fel">
    FEL
</div>



</div>




</template>






<script>

import DigitalDigit from './DigitalDigit.vue'

export default {
    name: 'Addition',
    props: {
        msg: String,

    },
    components: {
        DigitalDigit,
    },
    data: function () {
        return {
            tal1: Math.floor(Math.random() * 99),
            tal2: Math.floor(Math.random() * 20),
            tillfalligpoang: this.$session.get("poang"),
        }
    },
    created () {
            document.title = "Addition";
    },
    methods: {
        kollaSvar: function() {
            var that;
            if (this.$refs.svaret.value == this.tal1 + this.tal2) {
                this.$session.set("poang", this.$session.get("poang")+1);
                this.tillfalligpoang = this.$session.get("poang");
                this.$refs.ratt.style="display: block;"
                that = this;
                setTimeout(function(){
                    that.$refs.ratt.style="display: none;"
                    that.$refs.svaret.value = "";
                    that.tal1 = Math.floor(Math.random() * 99);
                    that.tal2 = Math.floor(Math.random() * 20);
                }, 2010);
            } else {
                this.$refs.fel.style="display: block;"
                that = this;
                setTimeout(function(){
                    that.$refs.fel.style="display: none;"
                    that.$refs.svaret.value = "";
                }, 1010);

            }

        },
    }
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
    color: #ccc;
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
    color: #42b983;
}

.linkstyle:hover {
    color: white;
}

.storre {
    font-size: 50px;
}

.fragan {
    font-size: 3em;
    font-family: serif;
    color: white;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
    -moz-appearance:textfield;
}

#svaret {
    font-size: 2em;
    width: 5em;
}

#svarsknapp {
    background-color: lightgreen;
    border: solid black 2px;
    border-radius: 10px;
    width: 100px;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    color: black;
}
#svarsknapp:hover {
    background-color: green;
}

.ratt {
    width: 130px;
    height: 130px;
    background: green;
    font-size: 3em;
    color: white;
    border-radius: 65px;
    text-align: center;
    padding-top: 30px;
    position :absolute;
  -webkit-animation: mymove 2s; /* Safari 4.0 - 8.0 */
  animation: mymove 2s;
  display: none;
  left: 50%;
  margin-left:-65px;

}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
  from {top: 500px;}
  to {top: -130px;}
}

/* Standard syntax */
@keyframes mymove {
  from {top: 500px;}
  to {top: -130px;}
}

.fel {
    width: 130px;
    height: 130px;
    background: red;
    font-size: 3em;
    color: white;
    border-radius: 65px;
    text-align: center;
    padding-top: 30px;
    top:200px;
    position:absolute;
    display: none;
    left: 50%;
    margin-left:-65px;
}




</style>
