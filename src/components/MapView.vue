<template>
  <div class="MapContainer">
    <map-component ref='kek' class="map-view"/>
    <v-btn @click="btnEvent">Button</v-btn>
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent'

export default {
  name: 'HelloWorld',
  components: {
    MapComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push({
        name: 'Login'
      })
    }
  },
  methods: {
    btnEvent () {
      // console.log('wert')
      this.$refs.kek.showNewMarker(48.8567, 48.8567)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.imageHolder {
  height: 100%;
  width: 100%;
}
.map-view {
  height: 1600px;
  width: 400px;
}
</style>
