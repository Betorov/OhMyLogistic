<template>
  <div id="mapContainer" style="width: 100%; height: 100%;">
    <div ref="map" v-bind:style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
export default {
  name: 'hereMap',
  data () {
    return {
      map: {},
      platform: {},
      width: '100%',
      height: '400px',
      lng: 52.1,
      lat: 33.23
    }
  },
  created () {
    // eslint-disable-next-line
    this.platform = new H.service.Platform({
      app_id: 'vySUSBs1fnD746uLfwah',
      app_code: '5c_ntaaIPQXNlluzuw956g',
      useHTTPS: true
    })
  },
  mounted () {
    // Instantiate (and display) a map object:
    // eslint-disable-next-line
    this.map = new H.Map(
      this.$refs.map,
      this.platform.createDefaultLayers().normal.map,
      {
        zoom: 10,
        center: { lng: this.lng, lat: this.lat }
      }
    )
  },
  head: {
    meta: [
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
    ],
    script: [
      { type: 'text/javascript', src: 'http://js.api.here.com/v3/3.0/mapsjs-core.js' },
      { type: 'text/javascript', src: 'http://js.api.here.com/v3/3.0/mapsjs-service.js' },
      { type: 'text/javascript', src: 'https://js.api.here.com/v3/3.0/mapsjs-ui.js' },
      { type: 'text/javascript', src: 'https://js.api.here.com/v3/3.0/mapsjs-mapevents.js' }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
