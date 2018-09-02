<template>
  <v-app>
    <page-header/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
};
</script>

<style>
body {
  background: #252556;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
