mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXoyMCIsImEiOiJjbGY2dG5nZG0weWUyNDBvNGxucDlwcGhsIn0.SjnRmdd9Cn0Xm-TeL8UI2Q';

  let loc =  [14.437227814357714, 50.09022956779584];
  
  let map = new mapboxgl.Map({
      container: 'map',
      center: loc,
      zoom: 14,
      style: 'mapbox://style/mapbox/dark-v10'
  });
  
  map.scrollZoom.disable();
  map.addControl(new mapboxgl.NavigationControl());
  
  let marker = document.createElement('div');
  marker.id = 'marker';
  
  let popup = new mapboxgl.Popup({ offset: 70 })
      .setHTML('<div>Prague City University City Centre Campus<br>Hybernská 24, Praha 1, Czech Republic</div>');
  
  new mapboxgl.Marker(marker, { anchor: 'bottom' })
      .setLngLat(loc)
      .addTo(map)
      .setPopup(popup);

