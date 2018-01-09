<template>
  <div id="app">
    <img src="./assets/logo.png">
    <coun-tup class="myCounter" :end="2500" :duration="2.5" :options="{useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''}"></count-up>
    <router-view></router-view>
  </div>
</template>

<script>
import CountUp from "countto2017"
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
