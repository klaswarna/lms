<template>
  <div class="helsida">
      <h1>Välkommen till Ludwigs mattespel</h1>
      <img alt="Ludwig" src="../assets/ludwig.png">
    <p>
      Här kan du välja olika räknesätt

    </p>
    <ul>

        <li>
            <router-link class="linkstyle" to="/addition">
          PLUS
            </router-link>
        </li>
        <li>
            <router-link class="linkstyle" to="/subtraktion">
          MINUS
            </router-link>
        </li>
        <li>
            <router-link class="linkstyle" to="/multiplikation">
          GÅNGER
            </router-link>
        </li>
        <li>
            <router-link class="linkstyle" to="/division">
          DELAT MED
            </router-link>
        </li>
        <li>
            <router-link class="linkstyle" to="/avrundning">
          AVRUNDNINGg
            </router-link>
        </li>
    </ul>

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

.linkstyle {
    /*text-decoration: none;*/
    color: green;
}


</style>
