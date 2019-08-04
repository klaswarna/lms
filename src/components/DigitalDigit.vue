<template>

    <div class="digiwrap" v-on:click="nollstall" :key="poang">

        <div class="digitalDigit">

            <div class="innerWrap">
                <div id="digit1" ref="digit1">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <div class="line4"></div>
                    <div class="line5"></div>
                    <div class="line6"></div>
                    <div class="line7"></div>
                </div>

                <div id="digit2" ref="digit2">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <div class="line4"></div>
                    <div class="line5"></div>
                    <div class="line6"></div>
                    <div class="line7"></div>
                </div>
            </div>
        </div>

        <div class="vunnit" ref="vunnit">
            Grattis!<br> <b>100</b> poäng!
            <div class="omstart" v-on:click="nollstall">

                <div class="lilltext">
                    Du klarade spelet!
                </div>


                <router-link class="linkstyle" to="/">
                <i class="fa fa-home storre"></i>
                </router-link>

            </div>
        </div>





    </div>





</template>

<script>

export default {
    name: 'DigitalDigit',
    props: {
        msg: String
    },
    data: function () {
        return {
            poang: this.$session.get("poang") || 0,
        }
    },
    methods: {
        nollstall: function() {
            this.$session.set("poang", 0);
            this.poang = 0;
        },
    },
    mounted: function() {

            if (this.$session.get("poang") > 99) {
                this.$refs.vunnit.style="display: block";
            }

             var digitalNumber = {
                 lines:[
                 [true,true,true,false,true,true,true],
                 [false,false,true,false,false,true,false],
                 [true,false,true,true,true,false,true],
                 [true,false,true,true,false,true,true],
                 [false,true,true,true,false,true,false],
                 [true,true,false,true,false,true,true],
                 [true,true,false,true,true,true,true],
                 [true,false,true,false,false,true,false],
                 [true,true,true,true,true,true,true],
                 [true,true,true,true,false,true,true],
                 [false,false,false,false,false,false,false]
                ]
            };


            var nummer = this.poang;
            var left = Math.floor(nummer/10);
            var right = nummer - 10 * left;
            var pos = [left, right];
            var alt;
            var number1;
            var number2;

            for (var j = 0; j < 7; j++) {
                //var number = document.getElementById("digit"+i);


                number1 = this.$refs.digit1;
                if (digitalNumber.lines[pos[0]][j]) {
                    alt = "background-color: black;"
                } else {
                    alt = "background-color: #777777;"
                }
                number1.children[j].style = alt;

            }

            for (var k = 0; k < 7; k++) {
                //var number = document.getElementById("digit"+i);


                number2 = this.$refs.digit2;
                if (digitalNumber.lines[pos[1]][k]) {
                    alt = "background-color: black;"
                } else {
                    alt = "background-color: #777777;"
                }
                number2.children[k].style = alt;

            }

    },
    created () {
            document.title = "Addition";
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.digiwrap {
    text-align: center;
    margin-top: 40px;
    font-size: 5em;
    font-family: sans-serif;
}

/*digitalDigit*/
.digitalDigit {
    position: relative;
    display: inline-block;
    height: 100px;
    width: 150px;
    background-color: grey;
    border-style: solid;
    /*box-shadow: 10px 10px 5px grey;*/
}

.innerWrap {
    position: absolute;
    display: inline;
    top: 5%;
    left: 5%;
    height: 90%;
    width: 90%;
    /*background-color: yellow;*/
}

#digit1 {
    position: absolute;
    display:inline-block;
    /*background-color: blue;*/
    height: 100%;
    width: 40%;
    top:0%;
    left:0%;

}

#digit2 {
    position: absolute;
    display:inline-block;
    /*background-color: green;*/
    height: 100%;
    width: 40%;
    top: 0;
    left:55%;

}


.line1 {
    display: inline-block;
    position: absolute;
    width: 66.6%;
    height: 9%;
    left: 16.7%;
    top:0;
    background-color: #777777;
}

.line4 {
    display: inline-block;
    position: absolute;
    width: 66.6%;
    height: 9%;
    left: 16.7%;
    top:45.5%;
    background-color: #777777;
}

.line7 {
    display: inline-block;
    position: absolute;
    width: 66.6%;
    height: 9%;
    left: 16.7%;
    top:90.1%;
    background-color: #777777;
}

.line2 {
    display: inline-block;
    position: absolute;
    height: 36.4%;
    width: 16.7%;
    left: 0;
    top:9%;
    background-color: #777777;
}
.line3 {
    display: inline-block;
    position: absolute;
    height: 36.4%;
    width: 16.7%;
    left: 83.3%;
    top:9%;
    background-color: #777777;
}

.line5 {
    display: inline-block;
    position: absolute;
    height: 36.4%;
    width: 16.7%;
    left: 0;
    top:54.5%;
    background-color: #777777;
}
.line6 {
    display: inline-block;
    position: absolute;
    height: 36.4%;
    width: 16.7%;
    left: 83.3%;
    top:54.5%;
    background-color: #777777;
}

.vunnit {
    color: red;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: pink;
    display: none;
}
.lilltext {
    color:black;
    font-size: 0.4em;
}

.linkstyle {
    text-decoration: none;
    color: #42b983;
}

.linkstyle:hover {
    color: white;
}

</style>
