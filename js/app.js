 var obtenerUbicacion = function (e) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarPosicion);
    } else {
        alert("Actualice su navegador");
    }
};

var mostrarPosicion = function (posicion) {
    var coordenadas = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    };
    mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
    var mapa = new google.maps.Map($('#map'), {
      zoom: 9,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: mapa
    });
}

$(document).ready(function() {
    $('select').material_select();
  });