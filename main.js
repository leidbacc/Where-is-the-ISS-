require([
    "esri/Map",
    "esri/views/SceneView",
    "dojo/domReady!" //will not be called until DOM is ready
], function (
Map,
SceneView
) {
  const map = new Map({
    basemap: 'satellite'
    });
  const view = new SceneView({
    map: map,
    container: "sceneContainer",
    ui: {
        components: ["zoom"]
    }
    });
});
