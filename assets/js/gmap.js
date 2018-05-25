var mapLocation = new google.maps.LatLng(12.092074, -86.233434); //change coordinates here
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 14, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
    };

    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);


    //change address details here
    var contentString = '<div class="map-info">'
    + '<div class="map-title">'
    + '<div class="brand" href="{{ site.url }}#"><img alt="" src="assets/images/brand.png"><div class="brand-info"><div class="brand-name">bauhaus</div><div class="brand-text">architecture</div></div></div></div>'
    + '<p class="map-address">'
    + '<div class="map-address-row">'
    + '  <i class="fa fa-map-marker"></i>'
    + '  <span class="text"><strong>Melbourne, VIC 3000, Australia.</strong><br>'
    + '  Collins Street</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <i class="fa fa-phone"></i>'
    + '   <span class="text">(+01) 231-394-0713</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <span class="map-email">'
    + '      <i class="fa fa-envelope"></i>'
    + '      <span class="text">incognitotheme@gmail.com</span>'
    + '   </span>'
    + '</div>'
    + '<p class="gmap-open"><a href="{{ site.url }}https://www.google.com/maps/@-37.824812,144.965981,14z?hl=ru-RU" target="_blank">Open on Google Maps</a></p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    // Uncomment down to show Marker


    /*marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Bauhaus', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });*/



    // Uncomment down to show info window on marker

    /*google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });*/




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}
