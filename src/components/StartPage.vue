<template>
  <div class="helsida">
      <h1>Ludwigs mattespel</h1>
      <img class="ludwigbild" alt="Ludwig" src="../assets/ludwig.png">



        <div class="nyrad">
            <div class="knappgrupp">
                <router-link class="linkstyle" to="/addition">
                    <div class="raknesattknapp">
                        +
                    </div>
                </router-link>


                <router-link class="linkstyle" to="/subtraktion">
                    <div class="raknesattknapp">
                        –
                    </div>
                </router-link>
            </div>
        </div>


        <div class="nyrad">
            <div class="knappgrupp">
                <router-link class="linkstyle" to="/multiplikation">
                    <div class="raknesattknapp">
                        •
                    </div>
                </router-link>

                <router-link class="linkstyle" to="/division">
                    <div class="raknesattknapp">
                        ÷
                    </div>
                </router-link>
            </div>
        </div>

        <div class="nyrad">
            <div class="knappgrupp">
                <router-link class="linkstyle" to="/avrundning">
                    <div class="raknesattknapp">
                      ≈
                    </div>
                </router-link>
            </div>
        </div>


  </div>
</template>

<script>
export default {
  name: 'StartPage',
  props: {
    msg: String
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
a {
  color: #42b983;
}

.linkstyle {
    text-decoration: none;
}


.knappgrupp {
    margin: auto;
    display: inline-flex;
}

.raknesattknapp {
    background-color: #59F;
    width:50px;
    height:50px;
    border-radius: 10px;
    border: solid 1px black;
    margin: 10px;
    text-align: center;
    font-size: 40px;
    color: black;
}

.raknesattknapp:hover {
    background-color: #37D;

}

.nyrad {
    display: flex;
}

.ludwigbild {
    max-width: 80%;
}
</style>
