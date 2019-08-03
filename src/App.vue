<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  background-color: #cc0022;
  background-image: linear-gradient(to bottom, blue, green);
  height: 100%;
}
h1 {
    margin-top: 0;
    padding-top: 3px;
}
html {
    margin-top: 0;
    height: 100%;

}

body {
    margin-top: 0;
    height: 100%;
}

</style>
