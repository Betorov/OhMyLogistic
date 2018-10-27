<template>
  <div id="mapContainer"></div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // eslint-disable-next-line
    var platform = new H.service.Platform({
      app_id: 'vySUSBs1fnD746uLfwah',
      app_code: '5c_ntaaIPQXNlluzuw956g',
      useHTTP: true
    })

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers()

    // Instantiate (and display) a map object:
    // eslint-disable-next-line
    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
      }
    )
  },
  head: {
    meta: [
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
    ],
    script: [
      { type: 'text/javascript', src: 'http://js.api.here.com/v3/3.0/mapsjs-core.js' },
      { type: 'text/javascript', src: 'http://js.api.here.com/v3/3.0/mapsjs-service.js' }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
