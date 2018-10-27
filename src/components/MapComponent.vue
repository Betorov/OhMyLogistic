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
      behavior: {},
      platform: {},
      markers: [],
      width: '100%',
      height: '800px',
      lng: 52.1,
      lat: 33.23
    }
  },
  methods: {
    showNewMarker (lng, lat) {
      // eslint-disable-next-line
      var parisMarker = new H.map.Marker({lat: lat, lng: lng});
      debugger
      // eslint-disable-next-line
      this.map.addObject(parisMarker)
    },
    focusNewPoint (lng, lat, zoom) {
      this.map.setCenter({lat: lat, lng: lng})

      this.map.setZoom(zoom)
    }
  },
  created () {
    // eslint-disable-next-line
    this.platform = new H.service.Platform({
      app_id: 'vySUSBs1fnD746uLfwah',
      app_code: '5c_ntaaIPQXNlluzuw956g'
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

    // eslint-disable-next-line
    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))

    // eslint-disable-next-line
    var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508})
    this.map.addObject(parisMarker)
  }
  // head: {
  //   meta: [
  //     { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
  //   ],
  //   script: [
  //     { type: 'text/javascript', src: 'https://js.api.here.com/v3/3.0/mapsjs-core.js' },
  //     { type: 'text/javascript', src: 'https://js.api.here.com/v3/3.0/mapsjs-service.js' },
  //     { type: 'text/javascript', src: 'https://js.api.here.com/v3/3.0/mapsjs-ui.js' },
  //     { type: 'text/javascript', src: 'https://js.api.here.com/v3/3.0/mapsjs-mapevents.js' }
  //   ]
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
